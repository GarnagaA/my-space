import React from "react";
import classes from ".//index.module.scss";
import Button from "../Button";

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
      <div className={classes.counterWrapper} style={this.props.style}>
        <h2 className={classes.title}>Class Component</h2>
        <h2 className={classes.counterWindow}>{this.state.count}</h2>
        <div className={classes.buttons}>
          <Button
            onClick={this.increment}
            style={{ flex: "1", marginRight: 5 }}
          >
            Increment
          </Button>
          <Button onClick={this.decrement} style={{ flex: "1", marginLeft: 5 }}>
            Decrement
          </Button>
        </div>
      </div>
    );
  }
}
export default ClassComponent;
