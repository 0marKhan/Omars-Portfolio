import "./Footer.scss";
import Lottie from "lottie-react";
import deca from "./deca.json";

const Footer = () => {
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
          <a href="#" target="_blank">
            Email
          </a>
          <a href="#" className="font-class" target="_blank">
            LinkedIn
          </a>
          <a href="#" className="font-class" target="_blank">
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
