// https://akoskm.com/how-to-handle-multiple-form-actions-in-remix/
import { ActionFunctionArgs, json } from '@remix-run/node';
import { Form, useActionData, useLoaderData } from '@remix-run/react';
import { addTodo, clearTodos, getTodos, Todo } from '~/tasks/todo';
import { useEffect, useRef } from 'react';
import { Button, Container } from '~/components/styles';
import { Notes } from '~/components/Notes';

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
    <main style={{ padding: '20px' }}>
      <Container>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Todos</h1>
        <Form method="post"
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label htmlFor="todo" style={{ fontWeight: 'bold' }}>Title</label>
          <input type="text" name="todo" id="todo" autoComplete="off" ref={inputRef}
                 style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          <Button name="intent" value="add">Add</Button>
          <Button name="intent" value="clear">Clear</Button>
        </Form>
        <ul style={{ marginTop: '20px' }}>
          {todos.map((todo: Todo) => (
            <li key={todo.id} data-testid="todo" style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
              {todo.text}
            </li>
          ))}
        </ul>
      </Container>
      <Notes />
    </main>
  );
}