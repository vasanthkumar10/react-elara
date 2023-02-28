import React, { useContext } from "react";
import { UserContext } from "../App";

export function ComponentC() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>ComponentC - {user}</h2>
    </div>
  );
}
