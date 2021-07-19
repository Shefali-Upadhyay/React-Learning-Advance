import React, { Component } from "react";

export class RefsComponent extends Component {
  constructor(props) {
    super(props);
    //this is the latest method of calling ref
    this.inputRef = React.createRef();
    //this is another method called callback refs used when we want to access the DOM node when component mounts
    this.callbackRef = null;
    this.setCallbackRef = (element) => {
      this.callbackRef = element;
    };
  }

  componentDidMount() {
    // this.inputRef.current.focus()
    console.log(this.callbackRef);
    if (this.callbackRef) {
      //this.callbackRef is used to directly access dom element in callback ref
      this.callbackRef.focus();
    }
  }

  clickHandler = () => {
    //this.inputRef.current is used to access dom element in callback ref
    alert(this.inputRef.current.value);
    console.log(this.callbackRef.value);
  };

  render() {
    return (
      <div>
        <h4><u>Refs and Callback Ref</u></h4>
        <input type='text' ref={this.inputRef} />
        <input type='text' ref={this.setCallbackRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}
