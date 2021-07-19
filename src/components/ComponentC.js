import { React, Component } from "react";
import { UserConsumer } from "./userContext";

class ComponentC extends Component {
  render() {
    return (
      //here we use the value
      <UserConsumer>
        {(username) => {
          return <div>Hello {username}, you have learned Context API.</div>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentC;