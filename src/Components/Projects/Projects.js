import React, { useEffect } from "react";
import "./Projects.scss";
import tmpImage from "./ProjectSection/ProjectImages/tmp.png";
import expenseImg from "./ProjectSection/ProjectImages/expense-tracker.png";
import TasteMeals from "./ProjectSection/ProjectImages/TasteMeals.png";
import Movie from "./ProjectSection/ProjectImages/movie.png";

import "aos/dist/aos.css";
import AOS from "aos";

import ProjectSection from "./ProjectSection/ProjectSection";

//info for the project
const projectDetails = [
  {
    title: "TMovies",
    technologiesUsed: ["React.js", "tailwindcss", "Redux"],
    description:
      "A movie website made with react.js, tailwindcss and redux that makes api calls to show different genres of movies, and getting their details by clicking on them",
    imageUrl: Movie,
    liveLink: "https://0markhan.github.io/movie-app/",
    sourceCodeLink: "https://github.com/0marKhan/movie-app",
    //add links to where the buttons add here later for source code and live demo
  },
  {
    title: "TasteMeals",
    technologiesUsed: ["React.js", "CSS", "firebase"],
    description:
      "A restuarant website that's deployed on firebase. The website fetches the displayed menu from firebase, lets you place orders and sends them to the database",
    imageUrl: TasteMeals,
    liveLink: "https://tastemeals-acfcd.web.app",
    sourceCodeLink: "https://github.com/0marKhan/TasteMeal",
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
        {projectDetails.map((project) => (
          <ProjectSection
            title={project.title}
            techs={project.technologiesUsed}
            desc={project.description}
            imageUrl={project.imageUrl}
            liveUrl={project.liveLink}
            sourceCodeUrl={project.sourceCodeLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
