import { React, Component } from "react";
import MemoComponent from "./MemoComponent";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Memo()",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        text: "Memo()",
      });
    }, 2000);
  }

  render() {
    console.log("Parent Component Rendering");
    return (
      <div>
        <MemoComponent text={this.state.text} />
      </div>
    );
  }
}

export default ParentComp;
