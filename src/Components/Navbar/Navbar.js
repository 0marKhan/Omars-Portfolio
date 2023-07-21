import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faInstagram,
  faLinkedin,
  faGithub,
  // faFilePdf,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import Lottie from "lottie-react";
import deca from "./deca.json";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar" id="start">
      <div className="navbar-start">
        <Lottie className="lottie-anim" animationData={deca} />
      </div>
      <div className="navbar-end">
        <ul className="nav-links">
          <li>
            <a
              href="https://www.linkedin.com/in/omar-kkhan/"
              className="font-class"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} /> {/* LinkedIn */}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/0marKhan"
              className="font-class"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} /> {/* GitHub */}
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href="https://drive.google.com/file/d/1NOIpKQu44Q3FWgxpREX3gXJXFsjxp4VU/view?usp=sharing"
              className="font-class"
              target="_blank"
              rel="noopener noreferrer"
              download="Omars resume.pdf"
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
