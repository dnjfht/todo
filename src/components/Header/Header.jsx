import React from "react";
import "./Header.css";

export default function Header({ children }) {
  return <h1 className="title">{children}</h1>;
}
