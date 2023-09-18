import React from "react";
import { useLottie } from "lottie-react";
import rocketJSON from "./animation_lmov66ou.json";
const Animation = ({ style }) => {
  const options = {
    animationData: rocketJSON,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div className="rocket" style={style}>
      {View}
    </div>
  );
};

export default Animation;
