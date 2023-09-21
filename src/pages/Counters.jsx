import React, { useState } from "react";
import FunctionalCounter from "../components/FunctionalCounter";
import Animation from "../components/Animation/Animation";
import ClassComponent from "../components/ClassComponent";
import Button from "../components/Button";
const Counters = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onClickButton = (e) => {
    e.stopPropagation();
    console.log(e);
    setIsVisible((prev) => !prev);
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          marginTop: 30,
        }}
      >
        <FunctionalCounter />
        <ClassComponent />
      </div>
      <div
        style={{
          width: 500,
          height: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={onClickButton}
      >
        {isVisible ? (
          <Animation style={{ width: 500 }} />
        ) : (
          <Button
            style={{
              fontWeight: "bold",
              padding: "10px 20px",
              fontSize: 20,
            }}
            onClick={onClickButton}
            text={"Show Animation"}
          />
        )}
      </div>
    </div>
  );
};

export default Counters;
