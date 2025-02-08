import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import "./ParallaxSphere.css";
import Button from "../../Components/Button";

const ParallaxSphere = ({
  backgroundImage,
  title = "KAUST DIGITAL TWIN",
  description = "Transforming the future with AI-driven digital twin technology.",
  newTitle = "Lorem ipsum dolor sit amet consectetur adipiscing elitLorem ipsum dolor sit amet consectetur adipiscing elit.",
  newDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  button = { text: "Learn More", link: "#", icon: "+" },
}) => {
  const theme = useTheme();
  const backgroundColor = theme.palette.primary.main;
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionRef.current.offsetHeight;

      if (rect.top <= 0 && Math.abs(rect.top) <= sectionHeight - windowHeight) {
        const progress = Math.min(
          1,
          Math.max(0, Math.abs(rect.top) / (sectionHeight - windowHeight))
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = title.split(" ");
  const firstWord = words[0] || "";
  const restOfTitle = words.slice(1).join(" ");

  return (
    <div className="parallax-sphere-wrapper" ref={sectionRef} style={{ backgroundColor }}>
      <div className="parallax-sphere-container">
        {/* Background Image Circle */}
        <div
          className="background-circle"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            transform: `scale(${1 + scrollProgress * 0.5})`,
            opacity: 1 - scrollProgress * 1.5,
          }}
        />

        {/* Expanding Inner Green Circle */}
        <div
          className="inner-circle"
          style={{
            transform: `scale(${1 + scrollProgress * 12})`,
            opacity: scrollProgress < 0.9 ? 1 : 0,
          }}
        />

        {/* Main Text Content */}
        <div
          className="parallax-text"
          style={{
            opacity: 1 - scrollProgress * 1.2,
          }}
        >
          <h1>
            <span className="outlined">{firstWord}</span> <span className="filled">{restOfTitle}</span>
          </h1>
          <p>{description}</p>
          {button && (
            <Button
              text={button.text}
              href={button.link}
              icon={button.icon }
            />
          )}
        </div>

        {/* New Section with Styled Dummy Content */}
        <div
          className="new-section"
          style={{
            opacity: scrollProgress > 0.95 ? 1 : 0,
            transform: `translateY(${(1 - scrollProgress) * 80}px)`,
          }}
        >
          <div className="new-section-container">
            {/* Left Side - Large Bold Heading */}
            <div className="new-section-left">
              <h1>{newTitle}</h1>
            </div>

            {/* Right Side - Dummy Description */}
            <div className="new-section-right">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>
                Eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p>
                Digital twin technology integrates real-time data, AI, and simulation models to enhance predictive analytics, optimize operations, and improve decision-making in various industries, including smart cities, healthcare, and manufacturing.
              </p>
              <p>
                The future of digital transformation is here. Discover how AI-powered digital twins can revolutionize efficiency, reduce costs, and create sustainable innovations.
              </p>
            </div>

            {/* Learn More Button */}
            <div className="new-section-button">
              <Button text="Learn More" href="#" icon="+" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxSphere;
