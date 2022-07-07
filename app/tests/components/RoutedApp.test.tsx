import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { RoutedApp } from '../../src/RoutedApp/RoutedApp';
import { Router } from 'react-router-dom';


const wrappedComponent = (history: MemoryHistory): JSX.Element => (
  <Router location={history.location} navigator={history}>
    <RoutedApp />
  </Router>
);

describe('Routed App', () => {
  let history: MemoryHistory;

  beforeEach(() => {
    history = createMemoryHistory();
  });

  it('renders the root page', () => {
    history.push('/')
    render(wrappedComponent(history));
    expect(screen.getByTestId('learn')).toBeInTheDocument();
  });

  it.each(['home', 'about'])('routes to the correct page', (uri: string) => {
    history.push(`/${uri}`)
    render(wrappedComponent(history));
    expect(screen.getByTestId(uri)).toBeInTheDocument();
  });
});
