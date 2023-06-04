import React, { useEffect } from "react";

import { Email, LinkedIn } from "@mui/icons-material";
import "./ContactForm.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  useEffect(() => {
    AOS.init({
      duration: 600, // Set the animation duration (in milliseconds)
      once: true, // Apply the animation only once
    });
  }, []);

  return (
    <div className="contact-form-container">
      <h1 className="contact-heading" data-aos="zoom-in">
        Contact
      </h1>
      <div className="contact-details">
        <p className="contact-text" data-aos="fade-right">
          Interested in working together?
          <br /> Let's connect via email or LinkedIn!
        </p>
      </div>
      <div className="contact-form">
        <div className="form-column">
          <div className="basic-textform">
            <input type="text" placeholder="Name" />
          </div>
          <div className="basic-textform">
            <input type="text" placeholder="Email" />
          </div>
          <div className="basic-textform">
            <input type="text" placeholder="Subject" />
          </div>
        </div>
        <div className="form-column">
          <div className="multiline">
            <textarea type="text" placeholder="Message" />
          </div>
        </div>
      </div>
      <button className="custom-btn btn-16">Submit</button>
    </div>
  );
};

export default ContactForm;
