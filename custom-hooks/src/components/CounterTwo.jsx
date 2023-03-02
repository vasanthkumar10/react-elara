import React, { useState } from "react";
import { useCounter } from "../hooks/useCounter";

export function CounterTwo() {
  //   const [count, setCount] = useState(100);

  //   const increment = () => {
  //     setCount((prev) => prev + 10);
  //   };

  //   const decrement = () => {
  //     setCount((prev) => prev - 10);
  //   };

  //   const reset = () => {
  //     setCount(100);
  //   };

  const [count, increment, decrement, reset] = useCounter(1000, 10, 10, 100);

  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
