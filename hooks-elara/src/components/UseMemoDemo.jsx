// optimisation hook
import React, { useMemo, useState } from "react";

export function UseMemoDemo() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const checkEven = useMemo(() => {
    // let i = 0;
    // while (i < 90000) {
    //   console.log(i);
    //   i += 1;
    // }
    return counter1 % 2 === 0;
  }, [counter1]);

  return (
    <div>
      <h1>
        counter1 - {counter1} {checkEven ? "Even" : "Odd"}
      </h1>
      <button onClick={() => setCounter1((prev) => prev + 1)}>
        increase 1
      </button>
      <h1>counter2 - {counter2}</h1>
      <button onClick={() => setCounter2((prev) => prev + 1)}>
        increase 2
      </button>
    </div>
  );
}
