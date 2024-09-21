import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Hello } from './Hello';

describe('Hello', () => {
  it('is a dummy test', () => {
    expect(true).toBeTruthy();
  });

  it('renders', () => {
    const { getByText } = render(<Hello name={'World'}/>);
    expect(getByText('Hello World')).toBeVisible();
  });

  it('renders async', async () => {
    const { getByText } = render(<Hello name={'Async'}/>);
    await waitFor(() => expect(getByText('Hello Async')).toBeVisible());
  });
});