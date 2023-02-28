import React, { useState } from "react";

export function Forms() {
  const [name, setName] = useState("");

  const handleInput = (e) => {
    // if (e.target.value.length > 3) {
    //   console.log("string is greater than 3");
    //   return;
    // }
    setName(e.target.value);
  };

  return (
    <div className="forms">
      {/* uncontrolled component -> no value attribute */}

      {/* changing the value of state in the forms called controlled components */}
      <input type="text" value={name} onChange={handleInput} />
      <h2>{name}</h2>
    </div>
  );
}
