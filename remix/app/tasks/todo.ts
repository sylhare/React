export type Todo = {
  id: string;
  text: string;
};

const todos: Array<Todo> = [];

export function getTodos() {
  return todos;
}

export async function addTodo(todo: FormDataEntryValue) {
  if (typeof todo === "string" && todo !== "") {
    todos.push({ id: Math.random().toString(), text: todo as string });
  }
  return todos;
}

export function clearTodos() {
  todos.splice(0, todos.length);
  return todos;
}