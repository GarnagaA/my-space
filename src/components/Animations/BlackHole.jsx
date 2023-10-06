import React from "react";
import { useLottie } from "lottie-react";
import blackHole from "../../assets/lottie/black-hole.json";

const RocketAnimation = (props) => {
  const options = {
    animationData: blackHole,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div className="black-hole" {...props}>
      {View}
    </div>
  );
};

export default RocketAnimation;
