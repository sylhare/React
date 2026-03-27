import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ChildComponent from '@/app/context-demo/ChildComponent';
import { ValueProvider } from '@/app/context-demo/ValueContext';

describe('ChildComponent (without mocking)', () => {
  it('renders with empty value by default', () => {
    render(
      <ValueProvider>
        <ChildComponent />
      </ValueProvider>
    );
    expect(screen.getByTestId('child-value-display')).toBeInTheDocument();
    expect(screen.getByTestId('child-input')).toHaveValue('');
  });

  it('updates the shared context value when the input changes', async () => {
    const user = userEvent.setup();
    render(
      <ValueProvider>
        <ChildComponent />
      </ValueProvider>
    );
    const input = screen.getByTestId('child-input');
    await user.type(input, 'hello');
    expect(input).toHaveValue('hello');
    expect(screen.getByTestId('child-value-display')).toHaveTextContent('hello');
  });

  it('renders the back-to-home link', () => {
    render(
      <ValueProvider>
        <ChildComponent />
      </ValueProvider>
    );
    const link = screen.getByTestId('child-back-link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
