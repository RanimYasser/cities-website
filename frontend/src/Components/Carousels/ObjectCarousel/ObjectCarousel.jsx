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
    arrowLeftPosition = "10%", // Default position for left arrow
    arrowRightPosition = "10%", // Default position for right arrow
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isTransitioning = useRef(false);
    const transitionDuration = 500;
    const containerRef = useRef(null);

    const nextSlide = useCallback(() => {
        if (!isTransitioning.current && items.length > 1) {
            isTransitioning.current = true;
            setCurrentIndex((prev) => (prev + 1) % items.length);
            setTimeout(() => (isTransitioning.current = false), transitionDuration);
        }
    }, [items.length]);

    const prevSlide = useCallback(() => {
        if (!isTransitioning.current && items.length > 1) {
            isTransitioning.current = true;
            setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
            setTimeout(() => (isTransitioning.current = false), transitionDuration);
        }
    }, [items.length]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight") nextSlide();
            if (e.key === "ArrowLeft") prevSlide();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [nextSlide, prevSlide]);

    if (!items?.length) return <p>No items available</p>;

    const getLayoutStyles = () => {
        switch (textPosition) {
            case "left":
                return { flexDirection: "row-reverse" };
            case "right":
                return { flexDirection: "row" };
            case "top":
                return { flexDirection: "column-reverse" };
            case "bottom":
                return { flexDirection: "column" };
            default:
                return { flexDirection: "row" };
        }
    };

    return (
        <div style={{ ...defaultStyles.carouselContainer, ...customStyles.carouselContainer }} ref={containerRef}>
            <div style={{ ...defaultStyles.carouselWrapper, ...customStyles.carouselWrapper }}>
                {/* Left Arrow */}
                {withArrows && items.length > 1 && (
                    <button
                        onClick={prevSlide}
                        aria-label="Previous slide"
                        style={{
                            ...defaultStyles.leftArrowStyle,
                            ...customStyles.leftArrowStyle,
                            left: arrowLeftPosition, // Fixed left position
                        }}
                    >
                        <img
                            src={arrowLeft}
                            alt="Previous"
                            style={{
                                ...defaultStyles.iconStyle,
                                ...customStyles.iconStyle,
                                border: "none",
                                outline: "none",
                            }}
                        />
                    </button>
                )}

                <div
                    style={{
                        ...defaultStyles.slideContainer,
                        ...customStyles.slideContainer,
                        ...getLayoutStyles(),
                    }}
                    onClick={!withArrows && items.length > 1 ? nextSlide : undefined}
                >
                    {/* Detect if the item is an image URL or a React component */}
                    <div style={{ ...defaultStyles.imageContainer, ...customStyles.imageContainer }}>
                        {typeof items[currentIndex] === "string" ? (
                            <img
                                src={items[currentIndex]}
                                alt={`Slide ${currentIndex + 1}`}
                                style={{
                                    ...defaultStyles.imageStyle,
                                    ...customStyles.imageStyle,
                                }}
                                draggable="false"
                            />
                        ) : (
                            <div
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                {items[currentIndex]}
                            </div>
                        )}
                    </div>

                    {/* Text Content */}
                    {textItems[currentIndex] && (
                        <div style={{ ...defaultStyles.textContainer, ...customStyles.textContainer }}>
                            <h2 style={{ ...defaultStyles.titleStyle, ...customStyles.titleStyle }}>
                                {textItems[currentIndex]}
                            </h2>
                            <p
                                style={{
                                    ...defaultStyles.descriptionStyle,
                                    ...customStyles.descriptionStyle,
                                }}
                            >
                                {descriptions[currentIndex] || ""}
                            </p>
                        </div>
                    )}
                </div>

                {/* Right Arrow */}
                {withArrows && items.length > 1 && (
                    <button
                        onClick={nextSlide}
                        aria-label="Next slide"
                        style={{
                            ...defaultStyles.rightArrowStyle,
                            ...customStyles.rightArrowStyle,
                            right: arrowRightPosition, // Fixed right position
                        }}
                    >
                        <img
                            src={arrowRight}
                            alt="Next"
                            style={{
                                ...defaultStyles.iconStyle,
                                ...customStyles.iconStyle,
                                border: "none",
                                outline: "none",
                            }}
                        />
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
        boxSizing:"border-box",
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
        opacity: 1,
        transition: "opacity 0.3s ease",
    },

    // Separate arrow styles
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
        left: "20%",
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
        transition: "background 0.3s ease",
    },
};

ObjectCarousel.propTypes = {
    items: PropTypes.array.isRequired,
    textItems: PropTypes.array,
    descriptions: PropTypes.array,
    links: PropTypes.array,
    withArrows: PropTypes.bool,
    withDots: PropTypes.bool,
    textPosition: PropTypes.oneOf(["left", "right", "top", "bottom"]),
    customStyles: PropTypes.object,
    arrowLeft: PropTypes.string,
    arrowRight: PropTypes.string,
    arrowLeftPosition: PropTypes.string,
    arrowRightPosition: PropTypes.string,
};
