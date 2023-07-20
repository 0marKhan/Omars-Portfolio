import React, { useEffect } from "react";
import "./Projects.scss";

import expenseImg from "./ProjectSection/ProjectImages/expense-tracker.png";
import TasteMeals from "./ProjectSection/ProjectImages/TasteMeals.png";
import Movie from "./ProjectSection/ProjectImages/movie.png";
import PlaceFinder from "./ProjectSection/ProjectImages/placefinder.png";

import "aos/dist/aos.css";
import AOS from "aos";

import ProjectSection from "./ProjectSection/ProjectSection";

//info for the project
const projectDetails = [
  {
    title: "PlaceFinder",
    technologiesUsed: ["React.js", "tailwind css", "React Leaflet"],
    description:
      "A website that lets you search for multiple different points of interest in different cities around the world by making multiple API calls, and then finally displaying their positions on a map (map displayed using react-leaflet)",
    imageUrl: PlaceFinder,
    liveLink: "https://0markhan.github.io/PlaceFinder/",
    sourceCodeLink: "https://github.com/0marKhan/PlaceFinder",
    //add links to where the buttons add here later for source code and live demo
  },
  {
    title: "TMovies",
    technologiesUsed: ["React.js", "tailwind css", "Material UI", "Redux"],
    description:
      "A movie website that makes API calls to TMBD and accesses movies, lets you see their details, ratings and descriptions. You can also search from movies in the list",
    imageUrl: Movie,
    liveLink: "https://tmovie1.netlify.app",
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
