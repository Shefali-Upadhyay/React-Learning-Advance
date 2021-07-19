import React, { Component } from "react";

export class Reconciliation extends Component {
  state = {
    change: true,
  };

  handleChange = (event) => {
    this.setState({ change: !this.state.change });
  };

  render() {
    const { change } = this.state;
    return (
      <div>
        <div>
          <button onClick={this.handleChange}>Change</button>
        </div>
        {change ? (
          <div>
            This is div cause it's true
            <h2>This is a h2 element in the div</h2>
          </div>
        ) : (
          <p>
            This is a p element cause it's false
            <br />
            <span>This is another paragraph in the false paragraph</span>
          </p>
        )}
      </div>
    );
  }
}

export default Reconciliation;
