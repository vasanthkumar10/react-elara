import React from "react";

function Child1({ age }) {
  console.log("state", age);
  return <div>Child1 - {age}</div>;
}

export default React.memo(Child1);
// export default Child1;
