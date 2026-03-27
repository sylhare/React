import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContextDemoPage from '@/app/context-demo/page';

describe('Context Demo Page', () => {
  it('renders the page heading', () => {
    render(<ContextDemoPage />);
    expect(screen.getByTestId('page-heading')).toHaveTextContent('Context Provider Demo');
  });

  it('renders the parent input', () => {
    render(<ContextDemoPage />);
    expect(screen.getByTestId('parent-input')).toBeInTheDocument();
  });

  it('renders the child component', () => {
    render(<ContextDemoPage />);
    expect(screen.getByTestId('child-input')).toBeInTheDocument();
  });

  it('renders the back-to-home link', () => {
    render(<ContextDemoPage />);
    const link = screen.getByTestId('page-back-link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });

  it('parent input updates both parent and child displays', async () => {
    const user = userEvent.setup();
    render(<ContextDemoPage />);
    await user.type(screen.getByTestId('parent-input'), 'shared');
    expect(screen.getByTestId('parent-value-display')).toHaveTextContent('shared');
    expect(screen.getByTestId('child-value-display')).toHaveTextContent('shared');
  });

  it('child input updates both parent and child displays', async () => {
    const user = userEvent.setup();
    render(<ContextDemoPage />);
    await user.type(screen.getByTestId('child-input'), 'from child');
    expect(screen.getByTestId('parent-value-display')).toHaveTextContent('from child');
    expect(screen.getByTestId('child-value-display')).toHaveTextContent('from child');
  });
});
