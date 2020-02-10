import React from "react";
import "./style.css";

function Counter(props) {
  return <h2 className="counter">{props.children}</h2>
}

export default Counter;
