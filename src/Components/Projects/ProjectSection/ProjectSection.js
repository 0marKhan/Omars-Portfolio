import "./ProjectSection.scss";
import Technologies from "./Technologies/Technologies";

//info for the project
const ProjectDetails = [
  {
    technologiesUsed: ["React.js", "SASS", "Material UI"],
    description:
      "lorem epsum dolor sit amet, consectetur adipiscing el lorem epsum dolor sit amet, consectetur adipiscing el lorem epsum dolor sit amet, consectetur adipiscing el lorem epsum dolor sit amet, consectetur adipiscing el",
  },
  {
    technologiesUsed: ["React.js", "SASS", "Material UI", "Node.js"],
    description:
      "lorem epsum dolor sit amet, consectetur adipiscing el lorem epsum dolor sit amet, consectetur adipiscing el lorem epsum dolor sit amet, consectetur adipiscing el lorem epsum dolor sit amet, consectetur adipiscing el",
  },
];

const ProjectSection = (props) => {
  return (
    <div className="container">
      <div className="content-left">
        <h2>Project 1 generic name</h2>
        <Technologies techs={ProjectDetails[0].technologiesUsed} />
        {ProjectDetails[0].description}
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
      <div className="image-section">{/* <ProjectImage/> */}</div>
    </div>
  );
};
export default ProjectSection;
