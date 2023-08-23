import React from "react";
// import Lottie from "lottie-react";
// import coding from "./coding.json";
import CodingImage from "./front-image.png";

import "./FrontImage.scss";

const FrontImage = () => {
  return (
    <div className="front-image">
      <div className="lottie-container">
        <img src={CodingImage} alt="coding" />
      </div>
    </div>
  );
};

export default FrontImage;
