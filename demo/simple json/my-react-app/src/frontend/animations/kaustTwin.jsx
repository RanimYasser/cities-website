import React, { useRef, useState, useEffect } from "react";
import "./kaustTwin.css";

export default function KaustTwin() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll progress dynamically
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const progress = Math.min(scrollTop / windowHeight, 1); // Normalize to [0, 1]
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="parallax-container">
      {/* Background */}
      <div
        className="background-layer"
        style={{
          backgroundImage: "url('/images/background.jpg')", // Corrected image URL
        }}
      />

      {/* Expanding Inner Circle */}
      <div className="circle-container">
        <div
          className="inner-circle"
          style={{
            transform: `scale(${1 + scrollProgress * 4})`, // Expand the inner circle
            opacity: 0.8 + scrollProgress * 0.2, // Gradually make it opaque
          }}
        />

        {/* Text Content */}
        <div
          className="text-content"
          style={{
            opacity: scrollProgress, // Fade in the text
            transform: `scale(${1 + scrollProgress * 0.2})`, // Slight growth for the text
          }}
        >
          <h1>kaust digital twin</h1>
          <p>COMING SOON</p>
          <p>A showcase of the world's best aerial photography</p>
        </div>
      </div>
    </div>
  );
}
