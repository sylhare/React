import React from 'react';
import { render } from '@testing-library/react';
import { Hello } from './Hello';

jest.mock('./Hello', () => {
  return {
    Hello: () => <div>Mocked Hello Component</div>,
  };
});

describe('Mock test', () => {
  it('renders when mocked', () => {
    const { getByText } = render(<Hello name={'whatever'}/>);
    expect(getByText('Mocked Hello Component')).toBeVisible();
  });
});