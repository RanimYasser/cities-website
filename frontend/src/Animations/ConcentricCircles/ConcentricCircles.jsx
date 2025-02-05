import React from "react";
import { motion } from "framer-motion";
import "./ConcentricCircles.css";

const ConcentricCircles = ({ title, description, button }) => {
  const circles = [
    { size: "30vw", delay: 0 },  
    { size: "45vw", delay: 0.5 },
  ];

  return (
    <section className="concentric-circles-section">
      {/* Background Animation */}
      <div className="concentric-circles-background">
        {circles.map((circle, index) => (
          <motion.div
            key={index}
            className="concentric-circle"
            initial={{ scale: 1, opacity: 0.7 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: circle.delay,
            }}
            style={{ width: circle.size, height: circle.size }}
          />
        ))}
      </div>

      {/* Text Content */}
      <div className="concentric-circles-content">
        <h1 className="concentric-title">{title}</h1>
        <p className="concentric-subtitle">{description}</p>
        <a href={button.link} className="concentric-button">
          {button.icon} {button.text}
        </a>
      </div>
    </section>
  );
};

export default ConcentricCircles;
