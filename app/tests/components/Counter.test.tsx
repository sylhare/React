import React, { PropsWithChildren } from 'react';
import { PreloadedState } from '@reduxjs/toolkit';
import { fireEvent, render, RenderOptions, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AppStore, RootState, setupStore } from '../../src/store/store';
import { Counter } from '../../src/Counter/Counter';
import { MemoryRouter } from 'react-router-dom';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => (
    <Provider store={store}><MemoryRouter>{children}</MemoryRouter></Provider>
  );

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

describe('Counter', () => {
  it('renders the counter page with the correct value', () => {
    renderWithProviders(<Counter/>, { preloadedState: { counter: { value: 42 } } });
    expect(screen.getByText(/42/)).toBeInTheDocument();
  });

  it('increment by one the counter', () => {
    renderWithProviders(<Counter/>, { preloadedState: { counter: { value: 1 } } });
    const incrementButton = screen.getByRole('button', { name: '+1' })
    fireEvent.click(incrementButton);
    expect(screen.getByText(/2/)).toBeInTheDocument();
  });
});
