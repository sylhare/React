import { render, screen } from '@testing-library/react';
import TransifexPage from '@/app/transifex/page';

describe('Transifex Landing Page', () => {
  it('renders the main heading', () => {
    render(<TransifexPage />);
    expect(screen.getByText('Transifex Native Examples')).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<TransifexPage />);
    expect(
      screen.getByText(
        'Learn how to implement internationalization in Next.js using Transifex Native.'
      )
    ).toBeInTheDocument();
  });

  it('renders navigation link to Basic Example', () => {
    render(<TransifexPage />);
    const link = screen.getByText('Basic Example');
    expect(link).toBeInTheDocument();
    expect(link.closest('a')).toHaveAttribute('href', '/transifex/basic-example');
  });

  it('renders navigation link to Reusable Components', () => {
    render(<TransifexPage />);
    const link = screen.getByText('Reusable Components');
    expect(link).toBeInTheDocument();
    expect(link.closest('a')).toHaveAttribute(
      'href',
      '/transifex/components-example'
    );
  });

  it('renders navigation link to Context & Comments', () => {
    render(<TransifexPage />);
    const link = screen.getByText('Context & Comments');
    expect(link).toBeInTheDocument();
    expect(link.closest('a')).toHaveAttribute(
      'href',
      '/transifex/context-example'
    );
  });

  it('renders navigation link to String Props', () => {
    render(<TransifexPage />);
    const link = screen.getByText('String Props');
    expect(link).toBeInTheDocument();
    expect(link.closest('a')).toHaveAttribute(
      'href',
      '/transifex/string-props-example'
    );
  });

  it('renders Back to Home link', () => {
    render(<TransifexPage />);
    const link = screen.getByText(/Back to Home/);
    expect(link).toBeInTheDocument();
    expect(link.closest('a')).toHaveAttribute('href', '/');
  });
});
