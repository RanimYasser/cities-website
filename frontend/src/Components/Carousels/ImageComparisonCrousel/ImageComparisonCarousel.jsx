import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; 
import ImageComparison from "../../ImageComparison/ImageComparison"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ImageComparisonCarousel.css"; 

import leftArrow from "/Media/Icons/LeftArrow.png";
import rightArrow from "/Media/Icons/RightArrow.png"; 

const slides = [
  {
    realImage: "/Media/Images/RealVsVirtual/RealCentral.png",
    virtualImage: "/Media/Images/RealVsVirtual/VirtualCentral.png",
    text: "This comparison highlights the central area of our real and virtual environment.",
  },
  {
    realImage: "/Media/Images/RealVsVirtual/RealBuilding.png",
    virtualImage: "/Media/Images/RealVsVirtual/VirtualBuilding.png",
    text: "Observe how our virtual model replicates real-world structures.",
  },
];

const ImageComparisonCarousel = () => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  const handleSlideChange = (swiper) => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(swiper.activeIndex);
      setFade(false);
    }, 300); 
  };

  return (
    <div className="carousel-container">
      {/* Left Side: Fixed Text */}
      <div className="text-content">
        <h1>REALITY VS VIRTUAL ENVIRONMENT</h1>
        <p>{slides[currentIndex].text}</p>
      </div>

      {/* Right Side: Image Comparison Slider */}
      <div className="comparison-wrapper">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]} 
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          loop={false}
          allowTouchMove={false} 
          className="swiper"
          style={{ width: "50vw", height: "65vh" }}
          onSlideChange={handleSlideChange}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className={`image-comparison-container ${fade ? "fade-out" : "fade-in"}`}>
                <ImageComparison realImage={slide.realImage} virtualImage={slide.virtualImage} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="custom-swiper-button-prev">
          <img src={leftArrow} alt="Previous" />
        </button>
        <button className="custom-swiper-button-next">
          <img src={rightArrow} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default ImageComparisonCarousel;
