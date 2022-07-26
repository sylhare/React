import React, { Suspense } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { RoutedApp } from '../../src/RoutedApp/RoutedApp';
import { MemoryRouter, Router } from 'react-router-dom';


const RoutedComponent = (history: MemoryHistory): JSX.Element => (
  <Router location={history.location} navigator={history}>
    <RoutedApp/>
  </Router>
);

describe('Routed App', () => {
  let history: MemoryHistory;

  beforeEach(() => {
    history = createMemoryHistory();
  });

  it('renders the root page', () => {
    history.push('/')
    render(RoutedComponent(history));
    expect(screen.getByTestId('learn')).toBeInTheDocument();
  });

  it('renders with the MemoryRouter', () => {
    render(<MemoryRouter><RoutedApp/></MemoryRouter>);
    expect(screen.getByTestId('learn')).toBeInTheDocument();
  });

  it('renders lazy component', async () => {
    render(
      <MemoryRouter initialEntries={['/component']}>
        <Suspense fallback={<div>FallbackDummy</div>}>
          <RoutedApp/>
          </Suspense>
      </MemoryRouter>
    );
    expect(screen.getByText('FallbackDummy')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByTestId('component')).toBeInTheDocument();
    });
  });

  it.each(['home', 'about', 'learn'])('routes to the correct page', (uri: string) => {
    history.push(`/${uri}`)
    render(RoutedComponent(history));
    expect(screen.getByTestId(uri)).toBeInTheDocument();
  });

  it.each(['home', 'about', 'learn'])('routes to the correct page with MemoryRouter', (uri: string) => {
    render(<MemoryRouter initialEntries={[`/${uri}`]}><RoutedApp/></MemoryRouter>);
    expect(screen.getByTestId(uri)).toBeInTheDocument();
  });
});
