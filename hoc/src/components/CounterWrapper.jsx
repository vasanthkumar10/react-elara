import React, { Component } from "react";

// higher order component
export function CounterWrapper(OriginalComponent) {
  class Wrapper extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState({
        count: this.state.count + 2,
      });
    };

    render() {
      console.log("original props", this.props);
      return (
        <>
          <OriginalComponent
            {...this.props}
            count={this.state.count}
            incrementCount={this.incrementCount}
          />
          <button>parent</button>
        </>
      );
    }
  }
  return Wrapper;
}
