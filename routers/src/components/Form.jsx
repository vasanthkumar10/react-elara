import React from "react";
import { useParams, Link, NavLink } from "react-router-dom";

export function Form() {
  const { user, id } = useParams();
  //   console.log(params);
  return (
    <div>
      <h2>
        Form {user} {id}
      </h2>
      <Link to="/input">Input</Link>
      <br />
      <NavLink to="/form/vasanth/1" reloadDocument>
        current form page
      </NavLink>
    </div>
  );
}
