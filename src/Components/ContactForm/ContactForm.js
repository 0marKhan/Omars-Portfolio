import React, { useEffect } from "react";
import BasicTextFields from "../BasicTextFields/BasicTextFields";
import MultilineTextFields from "../MultilineTextFields/MultilineTextFields";
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
          <BasicTextFields placeholder="Name" />
          <BasicTextFields placeholder="Email" />
          <BasicTextFields placeholder="Subject" />
        </div>
        <div className="form-column">
          <MultilineTextFields />
        </div>
      </div>
      <button className="custom-btn btn-16">Submit</button>
    </div>
  );
};

export default ContactForm;
