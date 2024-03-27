import React, { useEffect } from "react";
import "./Projects.scss";

import placeFinder from "./ProjectSection/ProjectImages/placefinder.png";

import ItemDetector from "./ProjectSection/ProjectImages/item-detector.png";
import PrimePlace from "./ProjectSection/ProjectImages/prime-place.png";
import Roam from "./ProjectSection/ProjectImages/roam.png";

import "aos/dist/aos.css";
import AOS from "aos";

import ProjectSection from "./ProjectSection/ProjectSection";

//info for the project
const projectDetails = [
  {
    title: "Roam Music Player",
    technologiesUsed: [
      "React.js",
      "CSS",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Cypress",
      "Netlify",
      "Render",
      "Material UI",
    ],
    description:
      "A dynamic music player website allowing users to explore, create playlists, and enjoy personalized music experiences. Facilitated seamless song addition, playlist curation, and smooth music playback for an engaging user journey. Demo User - (email: user1@gmail.com, password: password)",
    imageUrl: Roam,
    liveLink: "https://music-player-roam.netlify.app/",
    sourceCodeLink: "https://github.com/0marKhan/music-player",
    //add links to where the buttons add here later for source code and live demo
  },
  {
    title: "Real Estate Website",
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
    title: "Item Detector",
    technologiesUsed: ["React.js", "SCSS", "Material UI", "Clarifai"],
    description:
      "A website that does general item recognition. It lets you input an image Url, then using an API of a trained model from clarifai it outputs concept names related to that image and assigns them scores out of 1",
    imageUrl: ItemDetector,
    liveLink: "https://item-detector.netlify.app",
    sourceCodeLink: "https://github.com/0marKhan/ItemConceptDetector",
    //add links to where the buttons add here later for source code and live demo
  },

  {
    title: "Place Finder",
    technologiesUsed: ["React.js", "Tailwind CSS", "Axios", "Material UI"],
    description:
      "A website that lets you enter a location and find points of interest based on that",
    imageUrl: placeFinder,
    liveLink: "https://0markhan.github.io/PlaceFinder/",
    sourceCodeLink: "https://github.com/0marKhan/PlaceFinder",
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
