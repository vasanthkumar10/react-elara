import React, { useContext } from "react";
import { ComponentC } from "./ComponentC";
import { UserContext, AgeContext } from "../App";

export function ComponentB() {
  const user = useContext(UserContext);
  const age = useContext(AgeContext);
  return (
    <div>
      <h2>
        ComponentB - {user} {age}
      </h2>
      <ComponentC />
    </div>
  );
}
