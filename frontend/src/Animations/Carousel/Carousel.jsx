"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./Carousel.css";

const Carousel = ({ slides, loop = true }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="carousel-container">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide">
              <div
                className="embla__slide__inner"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="embla__slide__overlay">
                  <h3 className="slide-title">{slide.title}</h3>
                  {slide.subtitle && <p className="slide-subtitle">{slide.subtitle}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-arrow left-arrow" onClick={scrollPrev} aria-label="Previous Slide">
        &#9664;
      </button>
      <button className="carousel-arrow right-arrow" onClick={scrollNext} aria-label="Next Slide">
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
