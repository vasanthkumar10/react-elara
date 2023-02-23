import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    console.log("----constructor------");
    super(props);
    this.state = {
      count: 0,
      age: 10,
    };
  }

  handleIncrement = (step = 1) => {
    this.setState({
      count: this.state.count + step,
    });
  };

  handleIncrementByFive = () => {
    // setstate -> async fn (state, callbackfn)
    this.setState(
      (prev) => {
        console.log(prev);
        return { count: prev.count + 1 };
      },
      () => {
        console.log("count - 1", this.state.count);
      }
    );

    console.log("manual", this.state.count);

    this.setState(
      (prev) => {
        console.log(prev);
        return { count: prev.count + 1 };
      },
      () => {
        console.log("count - 2", this.state.count);
      }
    );

    this.setState(
      (prev) => {
        console.log(prev);
        return { count: prev.count + 1 };
      },
      () => {
        console.log("count - 3", this.state.count);
      }
    );
    this.setState(
      (prev) => {
        console.log(prev);
        return {
          count: prev.count + 1,
        };
      },
      () => {
        console.log("count - 4", this.state.count);
      }
    );
    this.setState(
      (prev) => {
        console.log(prev);
        return {
          count: prev.count + 1,
        };
      },
      () => {
        console.log("count - 5", this.state.count);
      }
    );
  };

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {
    console.log("component did mount---");
  }

  componentDidUpdate() {
    console.log("component did update------");
  }

  render() {
    // console.log("----render-----");
    return (
      <div>
        <h2>Counter - {this.state.count}</h2>
        <button onClick={() => this.handleIncrement(1)}>increment</button>
        <button onClick={this.handleIncrementByFive}>increment by 5</button>
      </div>
    );
  }
}

// Life cycle methods
// Mounting
// Updating
// Unmounting
