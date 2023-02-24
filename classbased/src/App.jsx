import React, { Component } from "react";
// import { Counter } from "./components/Counter";
// import { Welcome } from "./components/Welcome";
import { CounterHooks } from "./components/CounterHooks";
import { CounterHooks2 } from "./components/CounterHooks2";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Amit",
    };
  }

  changeName = () => {
    if (this.state.name === "Amit")
      this.setState({
        name: "Zakir",
      });
    else
      this.setState({
        name: "Amit",
      });
  };

  render() {
    return (
      <div>
        {/* <Welcome name={this.state.name} />
        <Welcome name={this.state.name} />
        <button onClick={this.changeName}>changeName</button> */}
        {/* <Counter /> */}

        <CounterHooks />
        <CounterHooks2 />
      </div>
    );
  }
}
