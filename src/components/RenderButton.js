import React from "react";
import ButtonWrapper from "./ButtonWrapper";
const RenderButton = (props) => {
  return <button style={props}>Click me</button>;
};
export default ButtonWrapper(RenderButton);
