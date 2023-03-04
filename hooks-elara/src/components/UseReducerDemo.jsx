import React, { useReducer } from "react";
import { initialState, reducer } from "../utils/reducer";

export function UseReducerDemo() {
  const [countObj, dispatch] = useReducer(reducer, initialState);
  console.log("state", countObj);
  return (
    <div>
      <input
        type="number"
        value={countObj.input}
        onChange={(e) => dispatch({ type: "ADD", value: e.target.value })}
      />
      <h2>Input - {countObj.input}</h2>
      <h2>Count - {countObj.count}</h2>
      <button
        onClick={() =>
          dispatch({ type: "INCREMENT", value: parseInt(countObj.input) })
        }
      >
        increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", value: 2 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT", value: 5 })}>
        increment 5
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
    </div>
  );
}
