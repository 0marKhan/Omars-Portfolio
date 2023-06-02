import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin, // LinkedIn icon
  faGithub, // GitHub icon
  faFilePdf, // Resume icon
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import Lottie from "lottie-react";
import deca from "./deca.json";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="lottie-container">
          <Lottie className="lottie-anim" animationData={deca} />
        </li>
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
    </nav>
  );
};

export default Navbar;
