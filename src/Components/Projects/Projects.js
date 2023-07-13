import React, { useEffect } from "react";
import "./Projects.scss";

import expenseImg from "./ProjectSection/ProjectImages/expense-tracker.png";
import TasteMeals from "./ProjectSection/ProjectImages/TasteMeals.png";
import Movie from "./ProjectSection/ProjectImages/movie.png";
import Weather from "./ProjectSection/ProjectImages/weather.png";

import "aos/dist/aos.css";
import AOS from "aos";

import ProjectSection from "./ProjectSection/ProjectSection";

//info for the project
const projectDetails = [
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
    title: "Weather App",
    technologiesUsed: ["React.js", "tailwind css"],
    description:
      "a weather app that pulls the current weather from the OpenWeather API and display it. You can search and enter different city names to see their temperature as well",
    imageUrl: Weather,
    liveLink: "https://weather12app.netlify.app",
    sourceCodeLink: "https://github.com/0marKhan/weatherapp",
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
