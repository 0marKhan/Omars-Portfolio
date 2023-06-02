import "./ProjectSection.scss";
import Technologies from "./Technologies/Technologies";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "./ProjectImages/tmp.png";

const ProjectSection = (props) => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="container">
      <div className="content-left" data-aos="fade-right">
        <h2>Project 1 generic name</h2>
        <Technologies techs={props.techs} data-aos="fade-right" />
        <span className="details">{props.desc}</span>
        <div className="project-buttons">
          <button className="button button--hyperion">
            <span>
              <span>See Live</span>
            </span>
          </button>
          <button className="button button--hyperion">
            <span>
              <span>Source Code</span>
            </span>
          </button>
        </div>
      </div>
      <div className="image-section" data-aos="fade-down">
        <img src={props.imageUrl} alt="project image" />
      </div>
    </div>
  );
};

export default ProjectSection;
