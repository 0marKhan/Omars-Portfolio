import "./FrontImage.scss";
import image from "./front-image.png";

const FrontImage = () => {
  return (
    <div className="front-image">
      <img src={image} alt="Logo image" />
    </div>
  );
};

export default FrontImage;
