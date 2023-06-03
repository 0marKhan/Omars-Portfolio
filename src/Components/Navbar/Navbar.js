import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faFilePdf,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import Lottie from "lottie-react";
import deca from "./deca.json";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-start">
        <Lottie className="lottie-anim" animationData={deca} />
      </div>
      <div className="navbar-end">
        <ul className="nav-links">
          <li>
            <a
              href="#"
              className="font-class"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} /> {/* LinkedIn */}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-class"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} /> {/* GitHub */}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-class"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFile} /> {/* Resume */}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
