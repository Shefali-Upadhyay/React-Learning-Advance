import React, { Component } from "react";

export class RenderProps extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Parul", age: 26 };
  }

  render() {
    return (
      <div>
        {this.props.prop1(this.state.name)}
        {this.props.prop2(this.state.age)}
      </div>
    );
  }
}

export default RenderProps;
