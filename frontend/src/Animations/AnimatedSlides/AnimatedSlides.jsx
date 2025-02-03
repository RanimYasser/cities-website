import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    number: "01",
    title: "Advancing our understanding of the universe",
    desc: "We are increasing science and technology literacy by inspiring youth to pursue science careers.",
    circles: [
      { size: "120vw", x: "-30%", y: "-20%", color: "rgba(0, 200, 250, 0.3)" },
      { size: "90vw", x: "40%", y: "10%", color: "rgba(0, 50, 100, 0.4)" }
    ]
  },
  {
    number: "02",
    title: "Inspiring and motivating science students through open exhibitions",
    desc: "Over the years, the Institute has created online and offline exhibits on space science.",
    circles: [
      { size: "110vw", x: "10%", y: "-5%", color: "rgba(0, 120, 200, 0.3)" },
      { size: "80vw", x: "-20%", y: "-15%", color: "rgba(0, 50, 80, 0.5)" }
    ]
  },
  {
    number: "03",
    title: "Pushing space technology forward with bright scientists",
    desc: "We constantly expand investigations in the fields of space & planetary physics.",
    circles: [
      { size: "130vw", x: "-40%", y: "-30%", color: "rgba(0, 180, 220, 0.3)" },
      { size: "100vw", x: "50%", y: "10%", color: "rgba(0, 80, 160, 0.4)" }
    ]
  }
];

const AnimatedSlides = () => {
  const containerRef = useRef(null);
  const slidesRef = useRef(null);
  const circlesRef = useRef([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (!containerRef.current) return;

      const sections = gsap.utils.toArray(".slide");
      const circles = gsap.utils.toArray(".circle");

      // **Fix Horizontal Scroll Animation**
      gsap.to(slidesRef.current, {
        x: `-${100 * (sections.length - 1)}vw`,
        ease: "power1.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${window.innerWidth * (sections.length - 1)}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // **Smooth Background Circles Animation**
      circles.forEach((circle, index) => {
        gsap.to(circle, {
          scale: index % 2 === 0 ? 1.4 : 1.1,
          opacity: 0.8,
          x: index % 2 === 0 ? "10vw" : "-10vw",
          y: index % 2 === 0 ? "-5vh" : "5vh",
          filter: "blur(20px)",
          duration: 2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top+=${index * window.innerHeight}px top`,
            end: "+=100%",
            scrub: 1,
          },
        });
      });

      // **Text Fade-In Sync**
      gsap.utils.toArray(".content").forEach((content, index) => {
        gsap.fromTo(
          content,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: content,
              start: "top center",
              end: "bottom center",
              scrub: 1,
            },
          }
        );
      });

    }, containerRef);

    return () => ctx.revert(); // Cleanup GSAP animations on unmount

  }, []);

  return (
    <div ref={containerRef} className="horizontal-scroll-container">
      <div ref={slidesRef} className="horizontal-slider">
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            {/* Dynamic Circles for Background Animation */}
            {slide.circles.map((circle, i) => (
              <div
                key={`${index}-${i}`} // Prevents React re-render issues
                ref={(el) => (circlesRef.current[index * 2 + i] = el)}
                className="circle"
                style={{
                  width: circle.size,
                  height: circle.size,
                  background: `radial-gradient(circle, ${circle.color}, rgba(0,0,0,0.85))`,
                  position: "absolute",
                  top: circle.y,
                  left: circle.x,
                  transform: "translate(-50%, -50%)",
                  borderRadius: "50%",
                }}
              ></div>
            ))}

            {/* Slide Content */}
            <div className="content">
              <h1>{slide.number}</h1>
              <h2>{slide.title}</h2>
              <p>{slide.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedSlides;
