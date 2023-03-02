import React, { useState } from "react";
import { useInput } from "../hooks/useInput";

export function Form() {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");

  //   const submitHandler = (e) => {
  //     e.preventDefault();
  //     console.log(firstName, lastName);
  //     setFirstName("");
  //     setLastName("");
  //   };

  const [firstName, bindFirstName, resetFirstName] = useInput("", "text");
  const [lastName, bindLastName, resetLastName] = useInput("", "password");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(firstName, lastName);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="fname">First Name</label>
          <input id="fname" {...bindFirstName} />
        </div>
        <div>
          <label htmlFor="lname">Last Name</label>
          <input id="lname" {...bindLastName} />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
