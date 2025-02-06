import { useState } from "react";
import "./style/LimitedEditions.css";
import telechargementImage from "../assets/img1.png";
import telechargementImage1 from "../assets/img2.png";

const images = [
  {
    title: "GAMEBOY COLOR X OPTIMUS PRIME",
    subtitle: "TRANSFORMERS",
    imgSrc: telechargementImage,
  },
  {
    title: "GAMEBOY COLOR X DELOREAN",
    subtitle: "RETOUR VERS LE FUTUR",
    imgSrc: telechargementImage1,
  },
];

// Helper function to determine the class name
const getSlideClassName = (isActive, isPrevious, isNext) => {
  if (isActive) return "active";
  if (isPrevious) return "previous";
  if (isNext) return "next";
  return "";
};

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const isActive = (index) => index === activeIndex;
  const isPrevious = (index) => index === activeIndex - 1;
  const isNext = (index) => index === activeIndex + 1;

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`slide ${getSlideClassName(isActive(index), isPrevious(index), isNext(index))}`}
        >
          <img src={image.imgSrc} alt={image.title} />
          <div className="slide-info">
            <h2>{image.title}</h2>
            <p>{image.subtitle}</p>
          </div>
        </div>
      ))}
      <button onClick={() => setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)}>Next</button>
    </div>
  );
};

export default ImageSlider;