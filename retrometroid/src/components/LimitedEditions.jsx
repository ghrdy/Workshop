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

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container">
      <button className="prev" onClick={goToPrevious}>
        ‹
      </button>
      <div className="slider">
        {images.map((image, index) => {
          const isActive = index === activeIndex;
          const isPrevious =
            index === (activeIndex === 0 ? images.length - 1 : activeIndex - 1);
          const isNext =
            index === (activeIndex === images.length - 1 ? 0 : activeIndex + 1);

          return (
            <div
              key={index}
              className={`slide ${
                isActive
                  ? "active"
                  : isPrevious
                  ? "previous"
                  : isNext
                  ? "next"
                  : ""
              }`}
              style={{ backgroundImage: `url(${image.imgSrc})` }}
            >
              {isActive && (
                <div className="slide-content">
                  <h2>{image.title}</h2>
                  <h3>{image.subtitle}</h3>
                  <button>Découvrir</button>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <button className="next" onClick={goToNext}>
        ›
      </button>
    </div>
  );
};

export default ImageSlider;
