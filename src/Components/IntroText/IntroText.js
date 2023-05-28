import React, { useEffect } from "react";
import { useTransition, animated } from "react-spring";
import "./IntroText.scss";

const IntroText = () => {
  const slideInLeftAnimation = useTransition(true, {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    config: { duration: 2500 },
  });

  return (
    <div className="intro-text">
      {slideInLeftAnimation((styles, item) =>
        item ? (
          <animated.div style={styles}>
            <h1 className="first-line">
              Hi, Im <span className="aqua-text">Omar</span>
            </h1>
            <h1 className="second-line">
              <span className="gradient-text">I'm a frontend developer.</span>
            </h1>
          </animated.div>
        ) : null
      )}
    </div>
  );
};

export default IntroText;
