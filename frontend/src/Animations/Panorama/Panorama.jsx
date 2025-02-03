import React, { useState } from "react";
import { useMediaQuery } from "@mui/material"; 
import "./Panorama.css";
import Button from "../../Components/Button";

const Panorama = ({ image, title, titleStyles, description, descriptionStyles, button }) => {
  const [backgroundPosition, setBackgroundPosition] = useState("50% 50%");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const handleMouseMove = (e) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const xPercent = 45 + (mouseX / width) * 9;
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
        backgroundSize: isMobile ? "cover" : "",  
        backgroundRepeat: "no-repeat",
        backgroundAttachment: isMobile ? "scroll" : "", 
      }}
    >
      {/* Overlay Content */}
      <div className="panorama-overlay">
        <h1 className="panorama-title" style={{...titleStyles,
          }}>{title}</h1>
        <p className="panorama-description" style={{
            ...descriptionStyles,
          
          }}>{description}</p>

        {button && (
          <Button
            text={button.text}
            href={button.link}
            icon={button.icon || "+"}
            style={{
              ...button.style,
              
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Panorama;
