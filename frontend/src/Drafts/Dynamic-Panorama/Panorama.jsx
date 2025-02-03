import React, { useState, useRef } from "react";
import "./Panorama.css";
import Button from "../../Components/Button";

const Panorama = ({ image, title, titleStyle, description, descriptionStyle, button }) => {
  const [backgroundPosition, setBackgroundPosition] = useState("50% 50%");
  const containerRef = useRef(null);
console.log("Title:", title,"styles:",titleStyle, "Description:", description,"styles:",descriptionStyle, "Button:", button); 
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const { left, width } = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - left;

    // Convert mouse position to percentage (move between 40% - 60%)
    const xPercent = 40 + (mouseX / width) * 20;

    console.log("MouseX:", mouseX, "Width:", width, "X%:", xPercent); // Debugging Output

    setBackgroundPosition(`${xPercent}% 50%`);
  };

  const handleMouseLeave = () => {
    setBackgroundPosition("50% 50%");
  };

  return (
    <div
      ref={containerRef}
      className="panorama-container"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        backgroundPosition: backgroundPosition, // Dynamically Updated
        transition: "background-position 0.2s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="panorama-overlay">
        <h1 className="panorama-title" style={titleStyle}>{title}</h1>
        <p className="panorama-description" style={descriptionStyle}>{description}</p>
        {button && (
          <Button 
            text={button.text} 
            href={button.link}
            variant="outlined"
            icon={button.icon || "+"}
            className="panorama-button"
            style={{
              ...button.style,
              fontSize: button.style?.fontSize || "1.5rem",
              fontWeight: button.style?.fontWeight || "bold",
              color: button.style?.color || "#ffffff",
              backgroundColor: button.style?.backgroundColor || "transparent",
              width: button.style?.width || "auto",
              marginTop: button.style?.marginTop || "1vh",
              borderRadius: button.style?.borderRadius || "0.5em",
              border: button.style?.border || "1px solid white",
              transition: "all 0.3s ease",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Panorama;
