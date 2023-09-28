import React from "react";
import { useLottie } from "lottie-react";
import BlackHole from "../../assets/lottie/black-hole.json";

const BlackHoleAnimation = (props) => {
  const options = {
    animationData: BlackHole,
    loop: true,
  };
  const { View } = useLottie(options);
  return <div {...props}>{View}</div>;
};

export default BlackHoleAnimation;
