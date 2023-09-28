import React from "react";
import { useLottie } from "lottie-react";

import spaceMan from "../../assets/lottie/spaceMan.json";
const SpaceManAnimation = (props) => {
  const options = {
    animationData: spaceMan,
    loop: true,
  };
  const { View } = useLottie(options);
  return <div {...props}>{View}</div>;
};

export default SpaceManAnimation;
