import { render, screen, waitFor } from '@testing-library/react';
import { createRemixStub } from '@remix-run/testing';
import HomePage from '~/routes/_index';
import { json } from '@remix-run/node';
import { userEvent } from '@testing-library/user-event';

describe('Home Page', () => {
  const user = userEvent.setup();
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
    render(<RemixStub/>);
  });

  it('should render the "hello from loader" message', async () => {
    await waitFor(() => screen.getByText('hello from loader'));
    expect(screen.getByText('hello from loader')).toBeInTheDocument();
  });

  it('should create a new note when click the button', async () => {
    await waitFor(() => screen.getByText('hello from loader'));
    const createNoteButton = screen.getByRole('button', { name: /Create a Note/i });
    await user.click(createNoteButton);
    const notesList = screen.getByRole('list');

    await waitFor(async () => expect(notesList).toBeVisible());
    expect(notesList).toContain(screen.getByText('Note 2'));
  });
});
