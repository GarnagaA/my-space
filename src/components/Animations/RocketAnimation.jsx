import React from "react";
import { useLottie } from "lottie-react";
import rocketJSON from "../../assets/lottie/space-walking.json";

const RocketAnimation = (props) => {
  const options = {
    animationData: rocketJSON,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div className="rocket" {...props}>
      {View}
    </div>
  );
};

export default RocketAnimation;
