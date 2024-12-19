// https://akoskm.com/how-to-handle-multiple-form-actions-in-remix/
import { ActionFunctionArgs, json } from '@remix-run/node';
import { Form, useActionData, useLoaderData } from '@remix-run/react';
import { addTodo, clearTodos, getTodos, Todo } from '~/tasks/todo';
import { useEffect, useRef } from 'react';

export async function loader() {
  return json({ todos: getTodos() });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const { todo } = Object.fromEntries(formData.entries());
  const intent = formData.get('intent');
  let shouldResetInput = false;

  switch (intent) {
    case 'add':
      await addTodo(todo);
      shouldResetInput = true;
      break;
    case 'clear':
      clearTodos();
      break;
    default:
      throw new Error('Unexpected action');
  }
  return json({ ok: true, shouldResetInput });
}

export default function FormPage() {
  const { todos } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const form = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (actionData?.ok) {
      form.current?.reset();
    }
    if (actionData?.shouldResetInput && inputRef.current?.value) {
      inputRef.current.value = '';
    }
  }, [actionData]);

  return (
    <main className="container">
      <div className="max-w-md">
        <h1 className="text-2xl pb-10">Todos</h1>
        <Form method="post" className="flex flex-col gap-4">
          <label htmlFor="todo">Title</label>
          <input type="text" name="todo" id="todo" autoComplete="off" ref={inputRef}/>
          <button name="intent" value="add">Add</button>
          <button name="intent" value="clear">Clear</button>
        </Form>
        <ul>
          {todos.map((todo: Todo) => (
            <li key={todo.id} className="text-lg pt-5">
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
