import React from "react";
import { BorderWrapper } from "./components/BorderWrapper";
import { CounterOne } from "./components/CounterOne";
// import { CounterTwo } from "./components/CounterTwo";
import { Form } from "./components/Form";
// import { Fetch } from "./components/Fetch";

export function App() {
  return (
    <div>
      {/* <BorderWrapper>
        <p>hi this is para</p>
        <p>vasanth is not sleeping well</p>
      </BorderWrapper> */}
      <BorderWrapper>
        <CounterOne />
      </BorderWrapper>
      {/* <CounterTwo /> */}
      <BorderWrapper>
        <Form />
      </BorderWrapper>
      {/* <Fetch /> */}
    </div>
  );
}
