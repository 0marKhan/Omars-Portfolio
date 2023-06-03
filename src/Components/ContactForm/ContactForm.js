import BasicTextFields from "../BasicTextFields/BasicTextFields";
import MultilineTextFields from "../MultilineTextFields/MultilineTextFields";
import { Email, LinkedIn } from "@mui/icons-material";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h1 className="contact-heading">Contact</h1>
      <div className="contact-details">
        <p className="contact-text">
          Interested in working together?
          <br /> Let's contact via email or LinkedIn
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
