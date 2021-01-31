import { render } from '@testing-library/react';
import React from 'react';
import Todo from '../components/Todo';

const exampleTodo = [
  {
    title: 'todo1'
  },
  {
    title: 'todo2'
  }];

describe('Todo test:', () => {
  it('finds buttons', () => {
    const {getAllByText} = render(<Todo todos={exampleTodo} />);
    const buttons = getAllByText('Select')
    expect(buttons.length).toBe(2)
  })

  it('finds titles', () => {
    const {getAllByTestId} = render(<Todo todos={exampleTodo} />);
    const todos = getAllByTestId('item')
    expect(todos[0].innerHTML).toBe('todo1')
    expect(todos[1].innerHTML).toBe('todo2')
  })

  it('use container to finds title', () => {
    const {container} = render(<Todo todos={exampleTodo} />);
    const todoFirst = container.querySelector('h3')
    expect(todoFirst.firstChild.textContent).toBe('todo1')
  })

  it('Make sure it stays the same', () => {
    const {container} = render(<Todo todos={exampleTodo} />);
    expect(container).toMatchSnapshot()
  })
});
