import React from "react";
import { ComponentB } from "./ComponentB";

export function ComponentA() {
  return (
    <div>
      <h2>ComponentA</h2>
      <ComponentB />
    </div>
  );
}
