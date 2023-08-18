import React, { useEffect } from "react";
import "./Projects.scss";

import LinkShortener from "./ProjectSection/ProjectImages/LinkShortener.png";
import TasteMeals from "./ProjectSection/ProjectImages/TasteMeals.png";
import Movie from "./ProjectSection/ProjectImages/movie.png";
import PrimePlace from "./ProjectSection/ProjectImages/prime-place.png";

import "aos/dist/aos.css";
import AOS from "aos";

import ProjectSection from "./ProjectSection/ProjectSection";

//info for the project
const projectDetails = [
  {
    title: "PrimePlace",
    technologiesUsed: [
      "React.js",
      "Tailwind CSS",
      "Redux",
      "Material UI",
      "Axios",
      "Jest",
    ],
    description:
      "A website that uses Bayut API to get data on real estates in the UAE, displays real estates on rent and for sale, shows their descriptions and lets you filter through the list of real estates",
    imageUrl: PrimePlace,
    liveLink: "https://prime-place.netlify.app",
    sourceCodeLink: "https://github.com/0marKhan/PrimePlace",
    //add links to where the buttons add here later for source code and live demo
  },
  {
    title: "TMovies",
    technologiesUsed: ["React.js", "Tailwind CSS", "Material UI", "Redux"],
    description:
      "A movie website that makes API calls to TMBD and accesses movies, lets you see their details, ratings and descriptions. You can also search from movies in the list",
    imageUrl: Movie,
    liveLink: "https://tmovie1.netlify.app",
    sourceCodeLink: "https://github.com/0marKhan/movie-app",
    //add links to where the buttons add here later for source code and live demo
  },
  {
    title: "TasteMeals",
    technologiesUsed: ["React.js", "CSS", "Firebase"],
    description:
      "A restuarant website that's deployed on firebase. The website fetches the displayed menu from firebase, lets you place orders and sends them to the database",
    imageUrl: TasteMeals,
    liveLink: "https://tastemeals-acfcd.web.app",
    sourceCodeLink: "https://github.com/0marKhan/TasteMeal",
  },
  {
    title: "Link Shortener",
    technologiesUsed: ["React.js", "CSS", "Axios", "Material UI"],
    description:
      "A website that lets you input long URL's by making an API call to shrtcode, and then displays the shortened link",
    imageUrl: LinkShortener,
    liveLink: "https://link-short-website.netlify.app",
    sourceCodeLink: "https://github.com/0marKhan/LinkShortener",
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
