import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.scss";
import picture from "./about.png";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <div className="about">
      <h1 data-aos="zoom-in">About</h1>
      <div className="about-container">
        <img src={picture} alt="about me picture" data-aos="fade-right" />
        <p className="about-description" data-aos="fade-down">
          I'm a passionate frontend developer, that's worked on many websites,
          and aim to work on much more.
          <br />
          <br />
          With a blend of creativity and technical expertise, I am excited to
          collaborate on projects that make a meaningful impact and leave a
          lasting impression.
        </p>
      </div>
    </div>
  );
};

export default About;
