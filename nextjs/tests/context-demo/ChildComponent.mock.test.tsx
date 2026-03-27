import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const mockSetValue = jest.fn();

jest.mock('@/app/context-demo/ValueContext', () => ({
  ...jest.requireActual('@/app/context-demo/ValueContext'),
  useValue: () => ({ value: 'mocked-value', setValue: mockSetValue }),
}));

import ChildComponent from '@/app/context-demo/ChildComponent';

describe('ChildComponent (with mocked useValue)', () => {
  beforeEach(() => {
    mockSetValue.mockClear();
  });

  it('displays the mocked context value', () => {
    render(<ChildComponent />);
    expect(screen.getByTestId('child-value-display')).toHaveTextContent('mocked-value');
    expect(screen.getByTestId('child-input')).toHaveValue('mocked-value');
  });

  it('calls setValue when the input changes', async () => {
    const user = userEvent.setup();
    render(<ChildComponent />);
    await user.type(screen.getByTestId('child-input'), 'x');
    expect(mockSetValue).toHaveBeenCalled();
  });

});
