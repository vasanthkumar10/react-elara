// Hooks -> function with state -> always import react
import React, { useState } from "react";
import { INITIALCOUNT } from "../utils/constants";

const initialCount = 100;

export function CounterHooks() {
  const [count, setCount] = useState(INITIALCOUNT);

  const increaseCount = (step) => {
    setCount(count + step);
  };

  const incrementBy5 = () => {
    // async function call
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(INITIALCOUNT);
  };

  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={() => increaseCount(3)}>increment</button>
      <button onClick={incrementBy5}>increment by 5</button>
      <button onClick={decreaseCount}>increment</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
