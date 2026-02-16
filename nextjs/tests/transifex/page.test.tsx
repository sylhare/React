import { fireEvent, render, screen } from '@testing-library/react';
import TransifexPage from '@/app/transifex/page';

const mockSetCurrentLocale = jest.fn();
const mockLocale = {
  setCurrentLocale: mockSetCurrentLocale,
  toString: () => 'en',
};

jest.mock('@transifex/react', () => ({
  T: ({ _str, ...props }: { _str: string; [key: string]: any }) => {
    let text = _str;
    Object.keys(props).forEach((key) => {
      if (key !== '_inline' && key !== 'count') {
        text = text.replace(`{${key}}`, props[key]);
      }
    });
    return <span>{text}</span>;
  },
  useLocale: jest.fn(() => mockLocale),
}));

describe('Transifex Example Page', () => {
  beforeEach(() => {
    mockSetCurrentLocale.mockClear();
  });

  it('renders the main heading', () => {
    render(<TransifexPage />);
    expect(screen.getByText('Transifex Example')).toBeInTheDocument();
  });

  it('renders language switcher buttons', () => {
    render(<TransifexPage />);
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('Español')).toBeInTheDocument();
    expect(screen.getByText('Français')).toBeInTheDocument();
  });

  it('renders all example sections', () => {
    render(<TransifexPage />);
    expect(screen.getByText('Basic Translation')).toBeInTheDocument();
    expect(screen.getByText('Variables')).toBeInTheDocument();
    expect(screen.getByText('Plurals')).toBeInTheDocument();
  });

  it('renders basic translation examples', () => {
    render(<TransifexPage />);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
    expect(screen.getByText('Welcome to Transifex')).toBeInTheDocument();
  });

  it('renders variable interpolation examples', () => {
    render(<TransifexPage />);
    expect(screen.getByText('Hello, John!')).toBeInTheDocument();
    expect(screen.getByText(/Welcome back, Sarah!/)).toBeInTheDocument();
  });

  it('renders plural examples with counter', () => {
    render(<TransifexPage />);
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
    const plusButton = screen.getAllByText('+')[0];
    const minusButton = screen.getAllByText('-')[0];
    expect(plusButton).toBeInTheDocument();
    expect(minusButton).toBeInTheDocument();
  });

  it('increments counter when plus button is clicked', () => {
    render(<TransifexPage />);
    const plusButton = screen.getAllByText('+')[0];
    fireEvent.click(plusButton);
    expect(screen.getByText('Count: 2')).toBeInTheDocument();
  });

  it('decrements counter when minus button is clicked', () => {
    render(<TransifexPage />);
    const plusButton = screen.getAllByText('+')[0];
    const minusButton = screen.getAllByText('-')[0];

    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    expect(screen.getByText('Count: 3')).toBeInTheDocument();

    fireEvent.click(minusButton);
    expect(screen.getByText('Count: 2')).toBeInTheDocument();
  });

  it('does not go below zero when decrementing', () => {
    render(<TransifexPage />);
    const minusButton = screen.getAllByText('-')[0];

    fireEvent.click(minusButton);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();

    fireEvent.click(minusButton);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  it('calls setCurrentLocale when language button is clicked', () => {
    render(<TransifexPage />);
    const spanishButton = screen.getByText('Español');

    fireEvent.click(spanishButton);
    expect(mockSetCurrentLocale).toHaveBeenCalledWith('es');
  });

  it('renders Back to Home link', () => {
    render(<TransifexPage />);
    const link = screen.getByText(/Back to Home/);
    expect(link).toBeInTheDocument();
    expect(link.closest('a')).toHaveAttribute('href', '/');
  });
});
