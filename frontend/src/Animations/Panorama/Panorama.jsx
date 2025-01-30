import React, { useState } from "react";
import "./Panorama.css";

const Panorama = ({ image, title, description, button }) => {
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
      {/* Overlay Content */}
      <div className="panorama-overlay">
        <h1 className="panorama-title">{title}</h1>
        <p className="panorama-description">{description}</p>
        {button && (
          <a href={button.link} className="panorama-button">
            {button.text}
          </a>
        )}
      </div>
    </div>
  );
};

export default Panorama;
