import React from "react";
import ReactDOM from "react-dom";

function Child2({ action }) {
  console.log("button", action);
  return ReactDOM.createPortal(
    <button onClick={action}>increment</button>,
    document.getElementById("copy")
  );
}

export default React.memo(Child2);
// export default Child2;
