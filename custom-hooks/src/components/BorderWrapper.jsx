import React from "react";

export function BorderWrapper(props) {
  console.log(props);
  return (
    <div
      style={{
        border: "2px solid black",
        margin: "10px",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      {props.children}
      <button>logout</button>
    </div>
  );
}
