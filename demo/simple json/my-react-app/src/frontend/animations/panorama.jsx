import React, { useState } from "react";
import "./Panorama.css";

const Panorama = () => {
  const [backgroundPosition, setBackgroundPosition] = useState("50% 50%");

  const handleMouseMove = (e) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - left; // Mouse X position relative to the container

    // Calculate a subtle horizontal position, limiting it between 45% and 55%
    const xPercent = 45 + (mouseX / width) * 10;

    // Update the background position with subtle movement
    setBackgroundPosition(`${xPercent}% 50%`);
  };

  const handleMouseLeave = () => {
    setBackgroundPosition("50% 50%"); // Reset to center on mouse leave
  };

  return (
    <div
      className="panorama-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundPosition }}
    >
      {/* Optional overlay or content */}
    </div>
  );
};

export default Panorama;
