import { React } from "react";

function Colour({ color }) {
  if (color === "Black") {
    throw new Error(" Black is dark!");
  }
  return <h1>{color}</h1>;
}

export default Colour;
