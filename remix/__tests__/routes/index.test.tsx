import { render, screen, waitFor } from '@testing-library/react';
import { createRemixStub } from '@remix-run/testing';
import HomePage from '~/routes/_index';
import { json } from '@remix-run/node';
import { userEvent } from '@testing-library/user-event';
import { Notes } from '~/components/Notes';
import { act } from 'react';

describe('Home Page', () => {

  const RemixStub = createRemixStub([
    {
      path: '/',
      Component: HomePage,
      loader() {
        return json({ message: 'hello from loader' });
      },
    },
  ]);

  beforeEach(() => {
    render(<RemixStub />);
  });

  it('should render the "hello from loader" message', async () => {
    await waitFor(() => screen.getByText('hello from loader'));
    expect(screen.getByText('hello from loader')).toBeInTheDocument();
  });

  describe('Noes List', () => {
    const user = userEvent.setup();

    it('should create a new note when click the button', async () => {
      render(<Notes />);
      await waitFor(() => screen.getByText('hello from loader'));
      const createNoteButton = screen.getByRole('button', { name: /Create a Note/i });
      await act(() => user.click(createNoteButton));
      const notesList = screen.getByRole('list');

      await waitFor(async () => expect(notesList).toBeVisible());
      expect(notesList).toContain(screen.getByText('Note 2'));
    });
  });
});
