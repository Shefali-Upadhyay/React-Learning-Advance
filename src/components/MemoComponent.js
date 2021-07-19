import React from "react";

function MemoComponent({ text }) {
  console.log("Rendering MemoComponent");
  return <div>{text}</div>;
}

export default React.memo(MemoComponent);
