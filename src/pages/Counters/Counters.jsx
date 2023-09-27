import React, { useState } from "react";
import FunctionalCounter from "../../components/FunctionalCounter";
import ClassComponent from "../../components/ClassComponent";
import Button from "../../components/Button";
import RocketAnimation from "../../components/Animations/RocketAnimation";
// import lol from "";
const Counters = () => {
  const [isVisible, setIsVisible] = useState(true);
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
          width: 500,
          height: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={onClickButton}
      >
        {isVisible ? (
          <RocketAnimation style={{ height: "100%" }} />
        ) : (
          <Button
            style={{
              fontWeight: "bold",
              padding: "10px 20px",
              fontSize: 20,
            }}
            onClick={onClickButton}
            chilren
          >
            Show Animation
          </Button>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <FunctionalCounter />
        <ClassComponent />
      </div>
    </div>
  );
};

export default Counters;
