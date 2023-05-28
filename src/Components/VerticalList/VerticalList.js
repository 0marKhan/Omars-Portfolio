import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import AOS from "aos";
import "aos/dist/aos.css";
import "./VerticalList.scss";

const VerticalList = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const listAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-100%)" },
    to: { opacity: 1, transform: "translateY(0%)" },
    config: { duration: 1300 },
  });

  return (
    <div className="list-vals">
      <animated.div
        data-aos="fade-right"
        data-aos-offset="2"
        style={listAnimation}
        className="vertical-line"
      />
      <animated.ul style={listAnimation}>
        <li
          data-aos="fade-up"
          data-aos-offset="2"
          data-aos-delay="300"
          className="Skills"
        >
          <a href="#" data-replace="Skills">
            <span>Skills</span>
          </a>
        </li>
        <li
          data-aos="fade-up"
          data-aos-offset="2"
          data-aos-delay="600"
          className="Projects"
        >
          <a href="#" data-replace="Projects">
            <span>Projects</span>
          </a>
        </li>
        <li
          data-aos="fade-up"
          data-aos-offset="2"
          data-aos-delay="900"
          className="About"
        >
          <a href="#" data-replace="About">
            <span>About</span>
          </a>
        </li>
        <li
          data-aos="fade-up"
          data-aos-offset="2"
          data-aos-delay="1200"
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
