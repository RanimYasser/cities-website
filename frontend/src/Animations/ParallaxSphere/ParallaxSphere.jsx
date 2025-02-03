import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles"; // ✅ Import theme
import "./ParallaxSphere.css";
import Button from "../../Components/Button";

const ParallaxSphere = ({
  backgroundImage,
  title,
  subtitle,
  description,
  button,
  style,
}) => {
  const theme = useTheme(); // ✅ Fetch MUI theme
  const backgroundColor = theme.palette.primary.main; // ✅ Dynamic theme background color

  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionRef.current.offsetHeight;

      if (rect.top <= 0 && Math.abs(rect.top) <= sectionHeight - windowHeight) {
        const progress = Math.min(1, Math.max(0, Math.abs(rect.top) / (sectionHeight - windowHeight)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="parallax-sphere-wrapper" ref={sectionRef} style={{ backgroundColor }}>
      <div className="parallax-sphere-container">
        {/* Background Image */}
        <div
          className="parallax-background"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        {/* Expanding Circle */}
        <div className="circle-wrapper">
          <div
            className="parallax-circle"
            style={{
              backgroundColor, // ✅ Use theme color dynamically
              transform: `scale(${0.5 + scrollProgress * 8})`, // Expand gradually
              opacity: scrollProgress, // Fade in as user scrolls
            }}
          />
          {/* Text Content */}
          <div
            className="parallax-text"
            style={{
              opacity: scrollProgress,
              transform: `scale(${1 + scrollProgress * 0.4})`,
            }}
          >
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p>{description}</p>
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
      </div>
    </div>
  );
};

export default ParallaxSphere;
