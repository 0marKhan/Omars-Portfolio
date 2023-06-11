import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Email, LinkedIn } from "@mui/icons-material";
import "./ContactForm.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  const [to_name, setTo_Name] = useState("");
  const [subject, setSubject] = useState("");
  const [from_email, setFrom_Email] = useState("");
  const [from_name, setFrom_Name] = useState("");
  const [message, setMessage] = useState("");

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const emailContent = {
      to_name: to_name,
      from_name: from_name,
      from_email: from_email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        "service_gimc0vq",
        "template_gmcl4v2",
        emailContent,
        "A3sUfvVxmXH3xs-fJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully");
          formRef.current.reset();
          setTo_Name("");
          setSubject("");
          setFrom_Email("");
          setFrom_Name("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          toast.error("Message not sent");
        }
      );
  };

  useEffect(() => {
    AOS.init({
      duration: 600, // Set the animation duration (in milliseconds)
      once: true, // Apply the animation only once
    });
  }, []);

  return (
    <div className="contact-form-container" id="contact">
      <h1 className="contact-heading" data-aos="zoom-in">
        Contact
      </h1>
      <div className="contact-details">
        <p className="contact-text" data-aos="fade-right">
          Interested in working together?
          <br /> Let's connect via email or LinkedIn!
        </p>
      </div>
      <form className="form-class" ref={formRef} onSubmit={sendEmail}>
        <div className="contact-form">
          <div className="form-column">
            <div className="basic-textform">
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                value={from_name}
                onChange={(event) => setFrom_Name(event.target.value)}
                required
              />
            </div>
            <div className="basic-textform">
              <input
                type="text"
                name="from_email"
                placeholder="Email"
                value={from_email}
                onChange={(event) => setFrom_Email(event.target.value)}
                required
              />
            </div>
            <div className="basic-textform">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-column">
            <div className="multiline">
              <textarea
                name="message_html"
                placeholder="Message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div className="contact-button">
          <button type="submit" name="submit" className="custom-btn btn-16">
            Submit
          </button>
        </div>
      </form>
      <style>
        {`
          .Toastify__toast-container {
            z-index: 99;
            position: fixed;
            top: 1rem;
            right: 1rem;
            padding: 8px;
            width: auto;
            box-sizing: border-box;
          }

          .Toastify__toast {
            margin-bottom: 8px;
            border-radius: 4px;
            font-family: Roboto Slab, sans-serif;
            font-size: 14px;
            line-height: 1.4;
            max-width: 340px;
            white-space: nowrap;
          }

        `}
      </style>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
