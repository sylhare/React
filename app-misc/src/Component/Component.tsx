import { Link } from 'react-router-dom';
import React from 'react';

function Component() {
  return (
    <div data-testid={'component'}>
      <main>
        <h2>Code-splitting</h2>
        <p>
          Use <code>React.lazy</code> for <a href={'https://reactjs.org/docs/code-splitting.html'}>code-splitting</a>.
          It only works with <code>export default</code> for now.
        </p>
      </main>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
    </div>
  );
}

export default Component;
