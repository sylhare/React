import { fireEvent, render, screen } from '@testing-library/react';
import { FormDemo } from '~/radix/Form/FormDemo';

describe('FormDemo', () => {
  test('renders the form and handles validation', () => {
    render(<FormDemo />);

    const emailInput = screen.getByLabelText(/email address/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    fireEvent.change(passwordInput, { target: { value: 'password' } });
    expect(screen.getByText(/please provide a valid password/i)).toBeInTheDocument();
    expect(submitButton).toBeDisabled();

    fireEvent.change(passwordInput, { target: { value: 'Password1!' } });
    expect(screen.queryByText(/please provide a valid password/i)).not.toBeInTheDocument();
    expect(submitButton).toBeEnabled();

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput).toHaveValue('test@example.com');

    fireEvent.click(submitButton);
  });
});