import leftChevron from "../assets/left-arrow.svg";
import rightChevron from "../assets/right-arrow.svg";
import "./Slider.css";
import { useState, useEffect } from "react";
import sliderData from "../data/sliderData";

export default function Slider() {
  const [sliderIndex, setSliderIndex] = useState(0);

  function toogleImage(indexPayLoad) {
    let newState;
    if (indexPayLoad + sliderIndex > sliderData.length) {
      newState = 1;
    } else if (indexPayLoad + slider < 1) {
      newState = sliderData.length;
    } else {
      newState = indexPayLoad + sliderIndex;
    }
    setSliderIndex(newState);
  }
  useEffect(() => {
    setInterval(() => toogleImage(1), 2000);
  }, []);
  return (
    <>
      <p className="index-info">
        {" "}
        {sliderIndex} / {sliderData.length}
      </p>
      <div className="slider">
        <p className="image-info">
          {" "}
          {sliderData.find((obj) => obj.id === sliderIndex).description}
        </p>
        <img
          src={"/images/img-${sliderIndex}.jpg"}
          alt="estate's rooms"
          className="slider-img"
        ></img>

        <button
          onClick={() => toogleImage(-1)}
          className="navigation-butto-prev-button"
        >
          {" "}
          <img src={leftChevron} alt="previous"></img>
        </button>
        <button
          onClick={() => toogleImage(-1)}
          className="navigation-butto-prev-button"
        >
          {" "}
          <img src={rightChevron} alt="next"></img>
        </button>
      </div>
    </>
  );
}
