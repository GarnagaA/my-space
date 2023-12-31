import { useState } from "react";
import classes from "./index.module.scss";
import Button from "../Button";
const FunctionalCounter = (props) => {
  const [counter, setCounter] = useState(0);

  const onIncrement = () => {
    setCounter((prev) => prev + 1000);
  };
  const onDecrement = () => {
    if (counter > 0) {
      return setCounter((prev) => prev - 1000);
    }
  };

  return (
    <div className={classes.counterWrapper} style={props.style}>
      <h2 className={classes.title}>Functional component</h2>
      <h2 className={classes.counterWindow}>{counter}</h2>
      <div className={classes.buttons}>
        <Button onClick={onIncrement} style={{ flex: "1", marginRight: 5 }}>
          Increment
        </Button>
        <Button onClick={onDecrement} style={{ flex: "1", marginLeft: 5 }}>
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default FunctionalCounter;
