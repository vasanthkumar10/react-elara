import React, { useContext } from "react";
import { UserContext } from "../App";

export function ComponentD() {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <h2>ComponentD - {user}</h2>
    </div>
  );
}
