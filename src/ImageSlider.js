import React, { useState } from "react";

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://picsum.photos/id/237/200/300", // "https://picsum.photos/id/237/200/300
      "https://picsum.photos/id/238/200/300",
      "https://picsum.photos/id/239/200/300",
      "https://picsum.photos/id/240/200/300",
      "https://picsum.photos/id/241/200/300",
        "https://picsum.photos/id/242/200/300",
  ];

  const handlePrev = () => {
    const index = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const index = (currentIndex + 1) % images.length;
    setCurrentIndex(index);
  };

  return (
    <div className="image-slider">
      <h1>Image Slider</h1>
      <div className="slider">
        <button className="prev" onClick={handlePrev}>
          Prev
        </button>
        <img src={images[currentIndex]} alt="random" />
        <button className="next" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;
