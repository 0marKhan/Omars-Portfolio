import "./Footer.scss";
import Lottie from "lottie-react";
import deca from "./deca.json";

const Footer = () => {
  const openEmailClient = () => {
    const recipientEmail = "omakhan98@gmail.com";
    const subject = ""; // You can customize the subject if needed
    const body = ""; // You can customize the body if needed

    const emailUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
      recipientEmail
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(emailUrl);
  };

  return (
    <footer className="footer">
      <div className="flex-row">
        <div className="flex-col">
          <h1 className="footer-col-heading">Get in Touch</h1>
          <p>
            If you have any questions or inquiries, feel free to reach out to
            me.
          </p>
          <br />
          <p></p>
        </div>
        <div className="flex-col">
          <h1 className="footer-col-heading">Follow me</h1>
          <a href="#" onClick={openEmailClient} rel="noopener noreferrer">
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/omar-kkhan/"
            className="font-class"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/0marKhan"
            className="font-class"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <Lottie className="lottie" animationData={deca} />
        <p>made with react and SCSS</p>
      </div>
    </footer>
  );
};

export default Footer;
