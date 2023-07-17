import React, { useEffect } from "react";
import "./SkillsSection.scss";
import "aos/dist/aos.css";
import AOS from "aos";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiSass,
  SiTailwindcss,
  SiGit,
  // SiMongodb,
  // SiReactnative,
  // SiNodeDotJs,
  SiBootstrap,
  SiNextdotjs,
  SiStyledcomponents,
  SiRedux,
  SiAdobexd,
} from "react-icons/si";

// import { IoLogoPython } from "react-icons/io";
import { FiFigma } from "react-icons/fi";

// import { DiNodejs } from "react-icons/di";
// import { FaNodeJs, FaReact } from "react-icons/fa";

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

          {/* TypeScript */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiTypescript className="skill-icon" title="TypeScript" />
            TypeScript
          </div>

          {/* Next.js */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiNextdotjs className="skill-icon" title="Next.js" />
            Next.js
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
          {/* Adobe XD */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiAdobexd className="skill-icon" title="Adobe XD" />
            Adobe XD
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
