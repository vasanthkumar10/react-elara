import React, { Component } from "react";
import { CounterWrapper } from "./CounterWrapper";

class Counter2 extends Component {
  render() {
    return (
      <div>
        <h2>count2 - {this.props.count}</h2>
        <button onClick={this.props.incrementCount}>increment</button>
      </div>
    );
  }
}

export default CounterWrapper(Counter2);
