import { useState } from "react";
import telechargementImage from "../assets/img1.png";
import telechargementImage1 from "../assets/img2.png";

export function CarousselDiviser() {
  const slides = [
    {
      id: 1,
      description: "De nouvelles possibilités",
      title: "PS VITA OLED",
      image: telechargementImage,
    },
    {
      id: 2,
      description: "De nouveaux horizons",
      title: "NDS LITE",
      image: telechargementImage1,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        onClick={prevSlide}
      >
        {"<"}
      </button>

      <div className="flex flex-col items-center justify-center w-1/2 h-1/2">
        <div className="w-full h-full">
          <img
            src={slides[currentIndex].image}
            alt="slider-img"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="text-center mt-4">
          <h2 className="text-2xl">{slides[currentIndex].title}</h2>
          <p className="text-lg">{slides[currentIndex].description}</p>
        </div>
      </div>

      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        onClick={nextSlide}
      >
        {">"}
      </button>
    </div>
  );
}