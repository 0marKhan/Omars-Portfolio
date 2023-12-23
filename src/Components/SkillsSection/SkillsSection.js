import React, { useEffect } from "react";
import "./SkillsSection.scss";
import "aos/dist/aos.css";
import AOS from "aos";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiGit,
  SiBootstrap,
  SiStyledcomponents,
  SiRedux,
} from "react-icons/si";

import { FiFigma } from "react-icons/fi";
import { FaJava, FaNodeJs } from "react-icons/fa";
import { IoLogoPython } from "react-icons/io";
import {
  SiJest,
  SiKubernetes,
  SiDocker,
  SiMongodb,
  SiExpress,
  SiCypress,
} from "react-icons/si";

const SkillsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="skills-section" id="skills-section">
      <div className="skills-content">
        <h1 className="skills-heading" data-aos="zoom">
          Skills
        </h1>
        <div className="skills-icons">
          {/* HTML */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiHtml5 className="skill-icon" title="HTML" />
            HTML
          </div>
          {/* CSS */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiCss3 className="skill-icon" title="CSS" />
            CSS
          </div>
          {/* JavaScript */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiJavascript className="skill-icon" title="JavaScript" />
            JavaScript
          </div>
          {/* React */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiReact className="skill-icon" title="React" />
            React
          </div>
          {/* Redux */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiRedux className="skill-icon" title="Redux" />
            Redux
          </div>
          {/* Tailwind CSS */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiTailwindcss className="skill-icon" title="Tailwind CSS" />
            Tailwind CSS
          </div>
          {/* Bootstrap */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiBootstrap className="skill-icon" title="Bootstrap" />
            Bootstrap
          </div>
          {/* Styled Components */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiStyledcomponents
              className="skill-icon"
              title="Styled Components"
            />
            Styled Components
          </div>
          {/* Sass */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiSass className="skill-icon" title="Sass" />
            Sass
          </div>
          {/* Java */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <FaJava className="skill-icon" title="Java" />
            Java
          </div>
          {/* Python */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <IoLogoPython className="skill-icon" title="Python" />
            Python
          </div>

          {/* Git */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiGit className="skill-icon" title="Git" />
            Git
          </div>
          {/* Figma */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <FiFigma className="skill-icon" title="Figma" />
            Figma
          </div>
          {/* Node.js */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <FaNodeJs className="skill-icon" title="Node.js" />
            Node.js
          </div>

          {/* Express.js */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiExpress className="skill-icon" title="Express.js" />
            Express.js
          </div>

          {/* MongoDB */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiMongodb className="skill-icon" title="MongoDB" />
            MongoDB
          </div>

          {/* Jest */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiJest className="skill-icon" title="Jest" />
            Jest
          </div>

          {/* Cypress */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiCypress className="skill-icon" title="Cypress" />
            Cypress
          </div>

          {/* Kubernetes */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiKubernetes className="skill-icon" title="Kubernetes" />
            Kubernetes
          </div>

          {/* Docker */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiDocker className="skill-icon" title="Docker" />
            Docker
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
