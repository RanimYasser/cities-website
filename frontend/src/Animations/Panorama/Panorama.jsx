import React, { useState } from "react";
import "./Panorama.css";

const Panorama = ({ image, text }) => {
  const [backgroundPosition, setBackgroundPosition] = useState("50% 50%");

  const handleMouseMove = (e) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - left; 
    const xPercent = 45 + (mouseX / width) * 10;
    setBackgroundPosition(`${xPercent}% 50%`);
  };

  const handleMouseLeave = () => {
    setBackgroundPosition("50% 50%");
  };

  return (
    <div
      className="panorama-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition,
      }}
    >
      {text && <div className="panorama-text">{text}</div>}
    </div>
  );
};

export default Panorama;
