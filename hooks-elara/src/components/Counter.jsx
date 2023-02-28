import React, { useState, useEffect } from "react";

let clearCount;

export function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [name, setName] = useState("vasanth");
  const [isCount1Visible, setCount1Visible] = useState(true);

  //   by default useEffect calls whenever my component rerenders
  useEffect(() => {
    console.log("calling useffect.........");

    // const handleCount = () => {
    console.log("starting the counter");
    clearCount = setInterval(() => {
      setCount1((prev) => prev + 1);
      console.log("count1 -->");
    }, 1000);
    console.log("clear count inside ", clearCount);
    setCount1(100);
    setCount2(200);
    // };

    // handleCount();
  }, []); // empty dependencies -> component did mount(render only once)

  const handleCount1 = () => {
    console.log("handling count 1");
    setCount1(count1 + 1);
  };

  const handleCount2 = () => {
    console.log("handling count 2");
    setCount2(count2 + 1);
  };

  useEffect(() => {
    function handleName() {
      console.log("name is changed", name);
    }

    handleName();
  }, [name]); // useeffect with depencies -> component did update

  return (
    <div>
      {isCount1Visible && <h2>Count1 - {count1}</h2>}
      <button onClick={handleCount1}>increment</button>
      <h2>Count2 - {count2}</h2>
      <button onClick={handleCount2}>increment</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount1Visible(!isCount1Visible)}>
        hide count1
      </button>
    </div>
  );
}
