import React from 'react';
import './Todo.css';


const Todo = ({todos, select, selected}) => (
  <React.Fragment>
    {todos.map(todo => (
      <React.Fragment key={todo.title}>
        <h3 data-testid="item" className={selected && selected.title === todo.title ? 'selected' : ''}>{todo.title}</h3>
        <div>{todo.description}</div>
        <button onClick={() => select(todo)}>Select</button>
      </React.Fragment>
    ))}
  </React.Fragment>
);

class TodoContainer extends React.Component {
  state = {
    todo: void 0,
  }
  select = (todo) => {
    this.setState({
      todo,
    })
  }

  render() {
    return (
      <Todo {...this.props} select={this.select} selected={this.state.todo}/>
    );
  }
}

export default TodoContainer;
