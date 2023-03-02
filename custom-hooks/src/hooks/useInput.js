import { useState } from "react";

export function useInput(initialState, type) {
  const [value, setValue] = useState(initialState);

  const reset = () => {
    setValue(initialState);
  };

  const bindObj = {
    type,
    value,
    onChange: (e) => setValue(e.target.value),
  };

  return [value, bindObj, reset];
}
