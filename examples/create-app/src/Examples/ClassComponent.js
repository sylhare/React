import React from "react";

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props); //Copy the received props to this.props
    this.state = {
      value: 'default value'
    };
  }

  componentDidMount() {
    console.log("I was mounted on screen")
    this.setState({value: this.props.value}); // props.value needs to exist, like props = { value: 'props value' }
  }

  componentWillUnmount() {
    console.log("better do some clean up to avoid a memory leak")
  }

  render() {
    return <p> Render my {this.state.value} </p>
  }

}
