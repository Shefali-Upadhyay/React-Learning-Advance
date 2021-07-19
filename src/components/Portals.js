import React from "react";
import ReactDOM from "react-dom";

function Portals() {
  return ReactDOM.createPortal(
    <div className='container'><h1>This is a demo for Portals.</h1></div>,
    document.getElementById("portal")
  );
}

export default Portals;
