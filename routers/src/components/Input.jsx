import React from "react";
import { Link, NavLink } from "react-router-dom";

export function Input() {
  return (
    <div>
      <h2>Input page</h2>
      <Link to="/form/vasanth/1">form</Link>
      <br />
      <NavLink to="/input">current page</NavLink>
    </div>
  );
}
