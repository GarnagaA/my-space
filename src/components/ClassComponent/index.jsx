import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1000 });
  }
  decrement() {
    if (this.state.count > 0) this.setState({ count: this.state.count - 1000 });
    else return "";
  }

  render() {
    return (
      <>
        <h1
          style={{
            background: "lightgrey",
            width: 200,
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          {this.state.count}
        </h1>
        <button style={{ width: 100 }} onClick={this.increment}>
          Increment
        </button>
        <button style={{ width: 100 }} onClick={this.decrement}>
          Decrement
        </button>
      </>
    );
  }
}
export default ClassComponent;
