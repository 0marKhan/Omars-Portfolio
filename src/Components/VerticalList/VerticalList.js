import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import AOS from "aos";
import "aos/dist/aos.css";
import "./VerticalList.scss";

const VerticalList = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const lineAnimation = useSpring({
    from: { scaleY: 0 },
    to: { scaleY: 1 },
    config: { duration: 500 },
  });

  return (
    <div className="list-vals">
      <animated.div
        data-aos="fade-right"
        data-aos-offset="2"
        style={lineAnimation}
        className="vertical-line"
      />
      <animated.ul>
        <li
          data-aos="fade-up"
          data-aos-offset="2"
          data-aos-delay="100"
          className="Skills"
        >
          <a href="#" data-replace="Skills">
            <span>Skills</span>
          </a>
        </li>
        <li
          data-aos="fade-up"
          data-aos-offset="2"
          data-aos-delay="300"
          className="Projects"
        >
          <a href="#" data-replace="Projects">
            <span>Projects</span>
          </a>
        </li>
        <li
          data-aos="fade-up"
          data-aos-offset="2"
          data-aos-delay="500"
          className="About"
        >
          <a href="#" data-replace="About">
            <span>About</span>
          </a>
        </li>
        <li
          data-aos="fade-up"
          data-aos-offset="2"
          data-aos-delay="700"
          className="Contact"
        >
          <a href="#" data-replace="Contact">
            <span>Contact</span>
          </a>
        </li>
      </animated.ul>
    </div>
  );
};

export default VerticalList;
