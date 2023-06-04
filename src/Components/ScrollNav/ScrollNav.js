import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ScrollNav.scss";
import Dropdown from "../Dropdown/Dropdown";

const ScrollNav = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 660) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-nav ${isVisible ? "visible" : ""}`}>
      {isVisible && <Dropdown />}
    </div>
  );
};

export default ScrollNav;
