import React from "react";
import "./Button.css";

export default function Button({ handleClick, value }) {
  return (
    <button className="btn" onClick={handleClick}>
      {value}
    </button>
  );
}
