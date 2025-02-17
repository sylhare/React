import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { createRemixStub } from '@remix-run/testing';
import FormPage, { action, loader } from '~/routes/form';

describe('FormPage', () => {
  const RemixStub = createRemixStub([
    {
      path: '/',
      Component: FormPage,
      loader,
      action,
    },
  ]);

  beforeEach(async () => {
    render(<RemixStub initialEntries={['/']} />);
    await waitFor(() => screen.getByText(/todos/i));
  });

  it('adds a todo', async () => {
    const input = screen.getByLabelText(/title/i);
    const addButton = screen.getByRole('button', { name: /add/i });

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(input).toHaveValue('');
      expect(screen.queryAllByTestId('todo')).toContainEqual(expect.objectContaining({ textContent: 'New Todo' }));
    });
  });

  it('clears todos', async () => {
    const clearButton = screen.getByRole('button', { name: /clear/i });

    fireEvent.click(clearButton);

    await waitFor(() => expect(screen.queryAllByTestId('todo')).toHaveLength(0));
  });
});