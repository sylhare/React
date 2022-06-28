import React, { Component } from 'react';

class Greetings extends Component {
  render() {
    return (
      <div>
        <GreetingText greeting={{ text: 'Welcome to React' }} />
      </div>
    );
  }
}

const GreetingText = ({ greeting }) => <h1>{greeting.text}</h1>;

export default Greetings;
