import React, { Component } from "react";
import Inputs from "./Inputs";

export class FRParentInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <h4>
          <u>Forwarding Ref</u>
        </h4>
        <Inputs ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default FRParentInput;
