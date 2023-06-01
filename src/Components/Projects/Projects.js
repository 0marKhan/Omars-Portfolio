import React from "react";
import "./Projects.scss";

import ProjectSection from "./ProjectSection/ProjectSection";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="projects-start-title">Projects</h1>
      <ProjectSection />
    </div>
  );
};

export default Projects;
