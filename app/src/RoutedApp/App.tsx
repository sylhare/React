import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Learn } from '../Learn/Learn';

export const RoutedApp = (): JSX.Element => (
  <div className="App">
    <h1>Welcome to React Router!</h1>
    <Routes>
      <Route path="/" element={<Learn/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
    </Routes>
  </div>
);

export function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
    </>
  );
}
