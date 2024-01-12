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
  SiCsharp,
  SiMongodb,
  SiExpress,
  SiCypress,
  SiMicrosoftazure,
  SiTypescript,
} from "react-icons/si";

import { DiMsqlServer } from "react-icons/di";

import { FiFigma } from "react-icons/fi";

import { FaJava, FaNodeJs, FaDatabase } from "react-icons/fa";

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
          {/* TypeScript */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiTypescript className="skill-icon" title="TypeScript" />
            TypeScript
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
          {/* C# */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiCsharp className="skill-icon" title="C#" />
            C#
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
          {/* SQL */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <FaDatabase className="skill-icon" title="SQL" />
            SQL
          </div>
          {/* Microsoft SQL Server */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <DiMsqlServer className="skill-icon" title="Microsoft SQL Server" />
            Microsoft SQL Server
          </div>

          {/* Azure */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiMicrosoftazure className="skill-icon" title="Azure" />
            Azure
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
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
