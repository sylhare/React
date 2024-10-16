import React from 'react';

export default class Parent extends React.Component {

  state = {
    message: "",
    data: "Hello World"
  }
  callbackFunction = (childData) => {
    this.setState({message: childData})
  }

  render() {
    return (
      <div>
        <Child1 parentCallback={this.callbackFunction}/>
        <p> {this.state.message} </p>
        <Child2 dataFromParent={this.state.data}/>
      </div>
    );
  }
}

class Child1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sent: false
    };
  }

  sendData = () => {
    this.props.parentCallback("Hey Popsie, How’s it going?");
  }

  render() {
    if (!this.state.sent) {
      this.sendData()
      this.setState({sent: true})
    }
    return (<div> Child 1 </div>);
  }
}

class Child2 extends React.Component {
  dataFromParent;
  render() {

    return (
      <div>
        Data from parent is:{this.props.dataFromParent}
      </div>
    );
  }
}


