import React, { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";

export default function ObjectCarousel({
    items,
    textItems = [],
    descriptions = [],
    links = [],
    withArrows = true,
    withDots = false,
    textPosition = "right",
    customStyles = {},
    arrowLeft = "/Media/Icons/LeftArrow.png",
    arrowRight = "/Media/Icons/RightArrow.png",
    arrowLeftPosition = "10%",
    arrowRightPosition = "10%",
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const isTransitioning = useRef(false);
    const transitionDuration = 500;
    const containerRef = useRef(null);

    const changeSlide = useCallback((direction) => {
        if (!isTransitioning.current && items.length > 1) {
            isTransitioning.current = true;
            setIsFading(true);

            setTimeout(() => {
                setCurrentIndex((prev) => (prev + direction + items.length) % items.length);
                setIsFading(false);
                isTransitioning.current = false;
            }, transitionDuration);
        }
    }, [items.length]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight") changeSlide(1);
            if (e.key === "ArrowLeft") changeSlide(-1);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [changeSlide]);

    if (!items?.length) return <p>No items available</p>;

    const getLayoutStyles = () => ({
        flexDirection: textPosition === "left" ? "row-reverse" :
                        textPosition === "top" ? "column-reverse" :
                        textPosition === "bottom" ? "column" :
                        "row"
    });

    return (
        <div style={{ ...defaultStyles.carouselContainer, ...customStyles.carouselContainer }} ref={containerRef}>
            <div style={{ ...defaultStyles.carouselWrapper, ...customStyles.carouselWrapper }}>
                {/* Left Arrow */}
                {withArrows && items.length > 1 && (
                    <button
                        onClick={() => changeSlide(-1)}
                        aria-label="Previous slide"
                        style={{
                            ...defaultStyles.leftArrowStyle,
                            ...customStyles.leftArrowStyle,
                            left: arrowLeftPosition,
                        }}
                    >
                        <img src={arrowLeft} alt="Previous" style={{ ...defaultStyles.iconStyle, ...customStyles.iconStyle }} />
                    </button>
                )}

                {/* Slide Content */}
                <div style={{ ...defaultStyles.slideContainer, ...customStyles.slideContainer, ...getLayoutStyles() }}>
                    <div
                        style={{
                            ...defaultStyles.imageContainer,
                            ...customStyles.imageContainer,
                            opacity: isFading ? 0 : 1,
                            transform: isFading ? "scale(0.95)" : "scale(1)",
                            transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
                            cursor: withArrows ? "default" : "pointer", // Enable pointer cursor if arrows are disabled
                        }}
                        onClick={() => !withArrows && changeSlide(1)} // Click to change slide if arrows are disabled
                    >
                        {typeof items[currentIndex] === "string" ? (
                            <img
                                src={items[currentIndex]}
                                alt={`Slide ${currentIndex + 1}`}
                                style={{ ...defaultStyles.imageStyle, ...customStyles.imageStyle }}
                                draggable="false"
                            />
                        ) : (
                            <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                {items[currentIndex]}
                            </div>
                        )}
                    </div>

                    {/* Text Content */}
                    {textItems[currentIndex] && (
                        <div
                            style={{
                                ...defaultStyles.textContainer,
                                ...customStyles.textContainer,
                                opacity: isFading ? 0 : 1,
                                transform: isFading ? "translateY(20px)" : "translateY(0)",
                                transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                            }}
                        >
                            <h2 style={{ ...defaultStyles.titleStyle, ...customStyles.titleStyle }}>{textItems[currentIndex]}</h2>
                            <p style={{ ...defaultStyles.descriptionStyle, ...customStyles.descriptionStyle }}>
                                {descriptions[currentIndex] || ""}
                            </p>
                        </div>
                    )}
                </div>

                {/* Right Arrow */}
                {withArrows && items.length > 1 && (
                    <button
                        onClick={() => changeSlide(1)}
                        aria-label="Next slide"
                        style={{
                            ...defaultStyles.rightArrowStyle,
                            ...customStyles.rightArrowStyle,
                            right: arrowRightPosition,
                        }}
                    >
                        <img src={arrowRight} alt="Next" style={{ ...defaultStyles.iconStyle, ...customStyles.iconStyle }} />
                    </button>
                )}
            </div>

            {/* Pagination Dots */}
            {withDots && items.length > 1 && (
                <div style={{ ...defaultStyles.dotContainerStyle, ...customStyles.dotContainerStyle }}>
                    {items.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            style={{
                                ...defaultStyles.dotStyle,
                                ...customStyles.dotStyle,
                                background: currentIndex === index ? "#fff" : "rgba(255,255,255,0.5)",
                                transform: currentIndex === index ? "scale(1.2)" : "scale(1)",
                                transition: "background 0.3s ease, transform 0.3s ease",
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

const defaultStyles = {
    carouselContainer: {
        position: "relative",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5vh 5vw",
        boxSizing: "border-box",
    },
    carouselWrapper: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        position: "relative",
    },
    slideContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        gap: "5vw",
        cursor: "pointer",
    },
    imageContainer: {
        flexShrink: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        height: "auto",
    },
    textContainer: {
        flex: 1,
        textAlign: "left",
        color: "white",
        maxWidth: "50%",
    },
    titleStyle: {
        fontSize: "2rem",
        fontWeight: "bold",
    },
    descriptionStyle: {
        fontSize: "1rem",
        marginTop: "1vh",
        lineHeight: "1.6",
    },
    iconStyle: {
        width: "40px",
        height: "40px",
        opacity: 0.8,
        transition: "opacity 0.3s ease-in-out",
    },
    leftArrowStyle: {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        zIndex: 2,
    },
    rightArrowStyle: {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        zIndex: 2,
    },
    dotContainerStyle: {
        position: "absolute",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "8px",
        zIndex: 1,
    },
    dotStyle: {
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        transition: "background 0.3s ease, transform 0.3s ease",
    },
};
