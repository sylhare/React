import React from 'react';
import logo from './logo.svg';
import './Learn.css';

export function Learn() {
  return (
    <div className="Learn" data-testid={'learn'}>
      <header className="Learn-header">
        <img src={logo} className="Learn-logo" alt="logo" />
        <p>
          Edit <code>src/Learn/Learn.tsx</code> and save to reload.
        </p>
        <a
          className="Learn-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
