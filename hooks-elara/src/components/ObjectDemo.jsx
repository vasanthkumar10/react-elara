import React, { useState } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  daughter: {
    name: "",
  },
};

export function ObjectDemo() {
  const [person, setPerson] = useState(initialState);

  return (
    <div>
      <div>
        <label htmlFor="fname">First Name: </label>
        <input
          type="text"
          id="fname"
          value={person.daughter.name}
          onChange={(e) =>
            setPerson({
              ...person,
              daughter: {
                name: e.target.value,
              },
            })
          }
        />
      </div>
      <div>
        <label htmlFor="lname">Last Name: </label>
        <input
          type="text"
          id="lname"
          value={person.lastName}
          onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
        />
      </div>
      <h4>
        {person.daughter.name} {person.lastName}
      </h4>
    </div>
  );
}
