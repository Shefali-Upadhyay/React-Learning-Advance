import React, { Component } from 'react';

export default class LifeCycles extends Component {
  constructor(props) {
    super(props);
    this.state = { hello: 'Hello World!', show: true };
  }
  componentWillMount() {
    console.log('componentWillMount() called');
  }
  componentDidMount() {
    console.log('componentDidMount() called');
  }
  changeState() {
    this.setState({ hello: 'Changed Hello World!' });
  }
  render() {
    console.log('render() called');
    return (
      <div>
        <h1>{this.state.hello}</h1>
        <h2>
          <button onClick={this.changeState.bind(this)}>Click Here!</button>
        </h2>
        <p>{this.state.show ? <Child /> : null}</p>
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          Click me to toggle
        </button>
      </div>
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate() called');
    return true;
  }
  componentWillUpdate() {
    console.log('componentWillUpdate() called');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate() called');
  }
}

export class Child extends Component {
  componentWillUnmount() {
    console.log('componentWillUnmount() called');
  }
  render() {
    return <div>Component within the main Component</div>;
  }
}
