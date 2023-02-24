// Hooks -> function with state -> always import react
import React, { useState } from "react";
import { INITIALCOUNT } from "../utils/constants";

const initialCount = 100;

export function CounterHooks2() {
  const [count, setCount] = useState(INITIALCOUNT);
  const [cars, setCars] = useState([
    {
      id: 1,
      name: "BMW",
    },
    {
      id: 2,
      name: "BMW",
    },
    {
      id: 3,
      name: "BMW",
    },
    {
      id: 4,
      name: "BMW",
    },
    {
      id: 5,
      name: "BMW",
    },
  ]);

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

  const removeCar = (name) => {
    let filteredCars = cars.filter((car) => car !== name);
    setCars(filteredCars);
  };

  return (
    <div>
      {/* <h2>Count - {count}</h2>
      <button onClick={() => increaseCount(3)}>increment</button>
      <button onClick={incrementBy5}>increment by 5</button>
      <button onClick={decreaseCount}>increment</button>
      <button onClick={reset}>reset</button> */}
      {cars.map((car, index) => (
        <li key={car.id}>
          {car.name} {index}
        </li>
      ))}

      <button onClick={() => removeCar("BMW")}>pop</button>
    </div>
  );
}
