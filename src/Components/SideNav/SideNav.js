import React, { useEffect, useState } from "react";
import "./SideNav.scss";

const SideNav = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 420; // Adjust this value to define the scroll distance
      const shouldShow = window.pageYOffset > scrollThreshold;
      setShowSideNav(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`side-nav ${showSideNav ? "show" : ""}`}>
      <div className="side-nav-content">
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default SideNav;
