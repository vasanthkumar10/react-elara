import React, { Component } from "react";
import { CounterWrapper } from "./CounterWrapper";

class Counter1 extends Component {
  render() {
    console.log("props", this.props);
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h2>count1 - {count}</h2>
        <button onClick={incrementCount}>increment</button>
      </div>
    );
  }
}

export default CounterWrapper(Counter1);
