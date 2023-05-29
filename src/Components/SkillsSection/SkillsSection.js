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
      duration: 1600,
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  });

  return (
    <div className="skills-section">
      <div className="skills-content">
        <h1 className="skills-heading" data-aos="fade-up">
          Skills
        </h1>
        <div
          className="skills-icons"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          {/* Icons for skills */}
          <SiHtml5 className="skill-icon" title="HTML" />
          <SiCss3 className="skill-icon" title="CSS" />
          <SiJavascript className="skill-icon" title="JavaScript" />
          <SiReact className="skill-icon" title="React" />
          <SiTailwindcss className="skill-icon" title="Tailwind CSS" />
          <SiBootstrap className="skill-icon" title="Bootstrap" />
          <SiSass className="skill-icon" title="Sass" />
          {/* <DiNodejs className="skill-icon" title="Node.js" /> */}
          {/* <FaNodeJs className="skill-icon" title="Express.js" /> */}
          <SiTypescript className="skill-icon" title="TypeScript" />
          <SiNextdotjs className="skill-icon" title="Next.js" />
          {/* <FiFigma className="skill-icon" title="Figma" /> */}
          <SiGit className="skill-icon" title="Git" />
          {/* <SiMongodb className="skill-icon" title="MongoDB" /> */}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
