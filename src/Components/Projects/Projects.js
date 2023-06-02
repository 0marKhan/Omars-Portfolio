import React, { useEffect } from "react";
import "./Projects.scss";
import tmpImage from "./ProjectSection/ProjectImages/tmp.png";

import "aos/dist/aos.css";
import AOS from "aos";

import ProjectSection from "./ProjectSection/ProjectSection";

//info for the project
const ProjectDetails = [
  {
    title: "project generic name",
    technologiesUsed: ["React.js", "SASS", "Material UI"],
    description:
      "lorem epsum dolor sit amet, consectetur adipiscing el lorem epsum dolor sit amet, consectetur adipiscing el lorem epsum dolor sit amet, consectetur adipiscing el lorem epsum dolor sit amet, consectetur adipiscing el",
    imageUrl: tmpImage,
    //add links to where the buttons add here later for source code and live demo
  },
  {
    technologiesUsed: ["React.js", "SASS", "Material UI", "Node.js"],
    description:
      "lorem epsum dolor sit amet, consectetur adipiscing el lorem epsum dolor sit amet, consectetur adipiscing el lorem epsum dolor sit amet, consectetur adipiscing el lorem epsum dolor sit amet, consectetur adipiscing el",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="projects">
      <h1 className="projects-start-title" data-aos="zoom">
        Projects
      </h1>
      <div className="section-spacing">
        <ProjectSection
          title={ProjectDetails[0].title}
          techs={ProjectDetails[0].technologiesUsed}
          desc={ProjectDetails[0].description}
          imageUrl={ProjectDetails[0].imageUrl}
        />
      </div>
      <div className="section-spacing">
        <ProjectSection
          title={ProjectDetails[0].title}
          techs={ProjectDetails[0].technologiesUsed}
          desc={ProjectDetails[0].description}
          imageUrl={ProjectDetails[0].imageUrl}
        />
      </div>
      <div className="section-spacing">
        <ProjectSection
          title={ProjectDetails[0].title}
          techs={ProjectDetails[0].technologiesUsed}
          desc={ProjectDetails[0].description}
          imageUrl={ProjectDetails[0].imageUrl}
        />
      </div>
      <div className="section-spacing">
        <ProjectSection
          title={ProjectDetails[0].title}
          techs={ProjectDetails[0].technologiesUsed}
          desc={ProjectDetails[0].description}
          imageUrl={ProjectDetails[0].imageUrl}
        />
      </div>
    </div>
  );
};

export default Projects;
