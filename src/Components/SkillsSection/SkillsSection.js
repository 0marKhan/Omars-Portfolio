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
  SiMongodb,
  SiReactnative,
  SiNodeDotJs,
  SiBootstrap, // Added Bootstrap icon
  SiNextdotjs, // Added Next.js icon
} from "react-icons/si";
import { IoLogoPython } from "react-icons/io";
import { FiFigma } from "react-icons/fi";
import { DiNodejs } from "react-icons/di";
import { FaNodeJs, FaReact } from "react-icons/fa";

const SkillsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  });

  return (
    <div className="skills-section">
      <div className="skills-content">
        <h1 className="skills-heading" data-aos="zoom">
          Skills
        </h1>
        <div
          className="skills-icons"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="skills-container">
            <SiHtml5 className="skill-icon" title="HTML" />
            HTML
          </div>

          <div className="skills-container">
            <SiCss3 className="skill-icon" title="CSS" />
            CSS
          </div>

          <div className="skills-container">
            <SiJavascript className="skill-icon" title="JavaScript" />
            Javascript
          </div>

          <div className="skills-container">
            <SiReact className="skill-icon" title="React" />
            React
          </div>

          <div className="skills-container">
            <SiTailwindcss className="skill-icon" title="Tailwind CSS" />
            Tailwind CSS
          </div>

          <div className="skills-container">
            <SiBootstrap className="skill-icon" title="Bootstrap" />
            Bootstrap
          </div>

          <div className="skills-container">
            <SiSass className="skill-icon" title="Sass" />
            Sass
          </div>

          {/* <DiNodejs className="skill-icon" title="Node.js" /> */}
          {/* <FaNodeJs className="skill-icon" title="Express.js" /> */}

          <div className="skills-container">
            <SiTypescript className="skill-icon" title="TypeScript" />
            TypeScript
          </div>

          <div className="skills-container">
            <SiNextdotjs className="skill-icon" title="Next.js" />
            Next.js
          </div>

          {/* <FiFigma className="skill-icon" title="Figma" /> */}

          <div className="skills-container">
            <SiGit className="skill-icon" title="Git" />
            Git
          </div>
          {/* <SiMongodb className="skill-icon" title="MongoDB" /> */}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
