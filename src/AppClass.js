import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0
  };

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <>
        <h2>Counter </h2>
        <button onClick={this.incrementCount}>
          I was clicked {this.state.count} times
        </button>

        <h2>Toggle Light</h2>
        <div
          style={{
            height: "50px",
            width: "50px",
            background: "grey"
          }}
        />
      </>
    );
  }
}

export default App;
