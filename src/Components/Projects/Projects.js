import React, { useEffect } from "react";
import "./Projects.scss";

import LinkShortener from "./ProjectSection/ProjectImages/LinkShortener.png";
import PhoneValidator from "./ProjectSection/ProjectImages/phone-validator.png";
import ItemDetector from "./ProjectSection/ProjectImages/item-detector.png";
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
    title: "PhoneNumValid",
    technologiesUsed: ["React.js", "CSS", "Firebase", "Material UI", "Axios"],
    description:
      "A website that lets you verify if a phone number is valid, shows which country the number is from, the carrier etc. It also lets you save, delete numbers in firebase and filter through them to search for numbers",
    imageUrl: PhoneValidator,
    liveLink: "https://phonenumvalid.web.app",
    sourceCodeLink: "https://github.com/0marKhan/PhoneNumberValidator",
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
    title: "URL Shortener",
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
