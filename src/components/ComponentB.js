import { React, Component } from "react";
import ComponentC from "./ComponentC";
import UserContext from "./userContext";

class ComponentB extends Component {
  //usually the below method is not preferred as it can only be used in class components and only one context can be used
  static contextType = UserContext;
  render() {
    return (
      //using context type property
      <div>
        Hi {this.context} from Component B.
        <ComponentC />
      </div>
    );
  }
}

// ComponentB.contextType = UserContext;
export default ComponentB;
