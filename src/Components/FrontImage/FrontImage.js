import React from "react";
import Lottie from "lottie-react";
import coding from "./coding.json";

import "./FrontImage.scss";

const FrontImage = () => {
  return (
    <div className="front-image">
      <div className="lottie-container">
        <Lottie className="lottie-anim" animationData={coding} loop={false} />
      </div>
    </div>
  );
};

export default FrontImage;
