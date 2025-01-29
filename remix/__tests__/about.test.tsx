import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { createRemixStub } from '@remix-run/testing';
import AboutPage, { loader, action } from '~/routes/about';

describe('AboutPage', () => {
  const RemixStub = createRemixStub([
    {
      path: '/about',
      Component: AboutPage,
      loader,
      action,
    },
  ]);

  beforeEach(() => {
    render(<RemixStub initialEntries={['/about']} />);
  });

  it('should render the "About Us" message', async () => {
    await waitFor(() => screen.getByText('About Us'));
    expect(screen.getByText('About Us')).toBeInTheDocument();
  });

  it('should render the loader data', async () => {
    await waitFor(() => screen.getByText('Hello, world!'));
    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
  });

  it('should handle form submission and display action data', async () => {
    await waitFor(() => screen.getByText('About Us'));
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello there!' } });

    fireEvent.click(submitButton);

    await waitFor(() => expect(screen.getByText(/Form Submission Successful/i)).toBeInTheDocument());
  });
});