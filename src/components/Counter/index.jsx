import { useState } from "react";

const FunctionalCounter = ({ style }) => {
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
    <div style={style}>
      <h1
        style={{
          background: "lightgrey",
          width: 200,
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        {counter}
      </h1>
      <h3 style={{ textAlign: "center" }}>Functional component</h3>
      <button style={{ width: 100 }} onClick={onIncrement}>
        Increment
      </button>
      <button style={{ width: 100 }} onClick={onDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default FunctionalCounter;
