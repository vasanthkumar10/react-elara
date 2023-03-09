import React, { useState, useCallback } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

export function Parent() {
  const [alwazAge, setAlwazAge] = useState(10);
  const [amitAge, setAmitAge] = useState(20);

  const incrementAlwaz = useCallback(() => {
    setAlwazAge(alwazAge + 1);
  }, [alwazAge]);

  const incrementAmit = useCallback(() => {
    setAmitAge(amitAge + 1);
  }, [amitAge]);

  console.log("parent");

  return (
    <>
      <div>
        <Child1 age={alwazAge} />
        <Child2 action={incrementAlwaz} />
      </div>
      <div>
        <Child1 age={amitAge} />
        <Child2 action={incrementAmit} />
      </div>
    </>
  );
}
