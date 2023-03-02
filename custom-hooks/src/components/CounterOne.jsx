import React from "react";
import { useCounter } from "../hooks/useCounter";

export function CounterOne() {
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount((prev) => prev + 1);
  // };

  // const decrement = () => {
  //   setCount((prev) => prev - 1);
  // };

  // const reset = () => {
  //   setCount(0);
  // };

  const [count, increment, decrement, reset] = useCounter();

  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
