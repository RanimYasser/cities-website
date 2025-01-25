import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./kaustTwin.css";

export default function KaustTwin() {
  const parallax = useRef(null);

  return (
    <div className="parallax-container">
      <Parallax ref={parallax} pages={2}>
        {/* Background Layer */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          className="background-layer"
          style={{
            backgroundImage: `url('/path/to/background-image.jpg')`,
            backgroundSize: "cover",
          }}
        />

        {/* Concentric Circles and Expanding Effect */}
        <ParallaxLayer
          offset={0}
          speed={0.8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="circle-container">
            <div className="outer-circle"></div>
            <div className="middle-circle"></div>
            <div className="expanding-circle"></div>
            <div className="text-content">
              <h1>Outlook Above</h1>
              <p>COMING SOON</p>
              <p>A showcase of the world's best aerial photography</p>
            </div>
          </div>
        </ParallaxLayer>

        {/* Extra Content Layer */}
        <ParallaxLayer offset={1} speed={0.5}>
          <div className="extra-content">
            <h2>More Content Here</h2>
            <p>Scroll to explore more...</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
