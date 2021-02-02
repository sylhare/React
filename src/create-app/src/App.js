import logo from './resources/logo.svg';
import './App.css';
import TodoContainer from "./components/Todo";
import Fetch from "./components/Fetch";
import FetchApi from "./components/FetchApi";
import FetchApiHooks from "./components/FetchApiHooks";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <TodoContainer todos={[
        {
          title: 'todo1'
        },
        {
          title: 'todo2'
        }]}/>

      <Fetch/>

      <FetchApi/>

      <FetchApiHooks/>

    </div>
  );
}

export default App;
