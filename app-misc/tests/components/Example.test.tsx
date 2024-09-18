import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Example from '../../src/Example/Example';
import userEvent from '@testing-library/user-event';

describe('Example', () => {
  const mock = jest.fn();
  beforeEach(() => render(<Example onSubmit={mock}/>));

  it('gets by data-testid', () =>
    expect(screen.getByTestId('example-test-id')).toHaveTextContent('hello'));

  it('gets by aria-label', () =>
    expect(screen.getByLabelText('example-label')).toHaveTextContent('world'));

  it('gets by alt', () =>
    expect(screen.getByAltText('nothing')).toBeInTheDocument());

  it('gets by role:button', () =>
    expect(screen.getByRole('button', { name: 'custom' })).toHaveTextContent('Click Me!'));

  it('gets by role with button tag', () =>
    expect(screen.getByRole('button', { name: 'genuine' })).toHaveTextContent('No Me!'));

  it('gets by role:heading', () =>
    expect(screen.getByRole('heading', { level: 1, name: 'heading-label' })).toHaveTextContent('Example'));

  it('gets by text', () =>
    expect(screen.getByText('Example')).toBeVisible());

  it('gets by title', () =>
    expect(screen.getByTitle('ExampleTitle')).toBeVisible());

  it('gets by displayValue', () =>
    expect(screen.getByDisplayValue('value-1')).toBeVisible());

  // Errors for testing-library/no-node-access
  // it('gets by element id', () =>
  //   expect((document.getElementById('input') as HTMLInputElement).value).toEqual('value-1'));

  it('updates an input with fire event', () => {
    fireEvent.change(screen.getByDisplayValue('value-1'), { target: { value: 'new value' } });
    expect(screen.getByDisplayValue('new value')).toBeVisible();
    expect(screen.queryByDisplayValue('value-1')).toBeNull();
  })

  it('updates an input with user event', () => {
    userEvent.type(screen.getByDisplayValue('value-1'), ' new value');
    expect(screen.getByDisplayValue('value-1 new value')).toBeVisible();
    expect(screen.queryByDisplayValue('value-1')).toBeNull();
  })

  it('gets by displayValue option', () => {
    expect(screen.getByDisplayValue('Option 2')).toBeVisible();
    expect(screen.queryByDisplayValue('Option 2')).toBeVisible();
    expect(screen.queryByDisplayValue('Option 1')).toBeNull();
  });

  it('clicks on a button', () => {
    fireEvent.click(screen.getByText(/submit/i))
    expect(mock).toHaveBeenCalledTimes(1)
  })

  it('clicks on a button async', async () => {
    fireEvent.click(screen.getByText(/send/i))
    await waitFor(() => expect(mock).toHaveBeenCalledTimes(1), { interval: 400, timeout: 1500 })
  })

  it('displays after click', async () => {
    expect(screen.queryByDisplayValue('Now you see me')).toBeNull();
    fireEvent.click(screen.getByText(/send/i))
    expect(await screen.findByText('Now you see me')).toBeVisible();
  })
});
