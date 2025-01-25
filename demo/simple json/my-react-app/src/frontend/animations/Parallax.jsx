import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from "../../backend/section1.json"; // Import the JSON
import "./Parallax.css";

gsap.registerPlugin(ScrollTrigger);

const Parallax = () => {
  useEffect(() => {
    // Dynamic animation logic based on the identifier
    const animationType = data.animation;

    if (animationType === "parallaxScroll") {
      // Apply parallax scrolling animation
      gsap.timeline({
        scrollTrigger: {
          trigger: ".scrollDist", // The scrolling container
          start: "top top", // Start scrolling when the container hits the top
          end: "bottom bottom", // End scrolling at the bottom
          scrub: 1, // Smooth linking of animations to scroll position
        },
      })
        .fromTo(".sky", { y: 0 }, { y: -200 }, 0) // Sky moves slower
        .fromTo(".cloud1", { y: 100 }, { y: -800 }, 0) // Background clouds move faster
        .fromTo(".cloud2", { y: -150 }, { y: -500 }, 0)
        .fromTo(".cloud3", { y: -50 }, { y: -650 }, 0)
        .fromTo(".mountBg", { y: 0 }, { y: -100 }, 0) // Mountains move slower
        .fromTo(".mountMg", { y: 0 }, { y: -250 }, 0)
        .fromTo(".mountFg", { y: 0 }, { y: -600 }, 0);
    }

    // Add more animations here as needed
    else if (animationType === "fadeIn") {
      // Example: Fade in all elements
      gsap.to(".parallax-container", {
        opacity: 1,
        duration: 2,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="parallax-container">
      {/* Scroll container */}
      <div className="scrollDist"></div>

      {/* Main SVG */}
      <main>
        <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          <mask id="m">
            <g className="cloud1">
              <rect fill="#fff" width="100%" height="801" y="799" />
              <image
                xlinkHref={data.images.cloud1}
                width="1200"
                height="800"
              />
            </g>
          </mask>

          <image
            className="sky"
            xlinkHref={data.images.sky}
            width="1200"
            height="590"
          />
          <image
            className="mountBg"
            xlinkHref={data.images.mountBg}
            width="1200"
            height="800"
          />
          <image
            className="mountMg"
            xlinkHref={data.images.mountMg}
            width="1200"
            height="800"
          />
          <image
            className="cloud2"
            xlinkHref={data.images.cloud2}
            width="1200"
            height="800"
          />
          <image
            className="mountFg"
            xlinkHref={data.images.mountFg}
            width="1200"
            height="800"
          />
          <image
            className="cloud1"
            xlinkHref={data.images.cloud1}
            width="1200"
            height="800"
          />
          <image
            className="cloud3"
            xlinkHref={data.images.cloud3}
            width="1200"
            height="800"
          />
          <text fill="#fff" x="350" y="200">
            {data.title1}
          </text>
          <g mask="url(#m)">
            <rect fill="#fff" width="100%" height="100%" />
            <text x="350" y="200" fill="#162a43">
              {data.title2}
            </text>
          </g>
        </svg>
      </main>
    </div>
  );
};

export default Parallax;
