import React, { useEffect } from "react";
import "./Projects.scss";
import tmpImage from "./ProjectSection/ProjectImages/tmp.png";
import expenseImg from "./ProjectSection/ProjectImages/expense-tracker.png";

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
    liveLink: "",
    sourceCodeLink: "",
    //add links to where the buttons add here later for source code and live demo
  },
  {
    title: "Expense Tracker",
    technologiesUsed: ["React.js", "SCSS"],
    description:
      "An expense tracker that lets you add your expenses, by adding the item label, price and date of purchase. After that you can view your expenses in the form of a list representation or in a graphical representation.",
    imageUrl: expenseImg,
    liveLink: "https://0markhan.github.io/expense-tracker/",
    sourceCodeLink: "https://github.com/0marKhan/expense-tracker",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="projects" id="projects">
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
          title={ProjectDetails[1].title}
          techs={ProjectDetails[1].technologiesUsed}
          desc={ProjectDetails[1].description}
          imageUrl={ProjectDetails[1].imageUrl}
          liveUrl={ProjectDetails[1].liveLink}
          sourceCodeUrl={ProjectDetails[1].sourceCodeLink}
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
