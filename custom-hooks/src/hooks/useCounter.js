import { useState } from "react";

export function useCounter(
  initialValue = 0,
  incrementValue = 1,
  decrementValue = 1,
  resetValue = 0
) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prev) => prev + incrementValue);
  };

  const decrement = () => {
    setCount((prev) => prev - decrementValue);
  };

  const reset = () => {
    setCount(resetValue);
  };

  return [count, increment, decrement, reset];
}
