import React, { lazy, Suspense } from "react";

const Carousel = lazy(() => import("../Animations/Carousel/Carousel"));
const Panorama = lazy(() => import("../Animations/Panorama/Panorama"));
const ParallaxSphere = lazy(() => import("../Animations/ParallaxSphere/ParallaxSphere"));
const ConcentricCircles = lazy(() => import("../Animations/ConcentricCircles/ConcentricCircles"));
const ObjectCarousel = lazy(() => import("../Components/Carousels/ObjectCarousel/ObjectCarousel"));
const AnimatedSlides = lazy(() => import("../Animations/AnimatedSlides/AnimatedSlides"));
const Counter =lazy(()=>import ("../Animations/Counter/Counter"));
const AnimationRenderer = ({ animationName, ...props }) => {
    if (!animationName) {
        return <div style={{ color: "red" }}>Error: No animation specified.</div>;
    }

    let Component;
    switch (animationName.toLowerCase()) {
        case "carousel":
            Component = Carousel;
            break;
        case "panorama":
            Component = Panorama;
            break;
        case "parallaxsphere":
            Component = ParallaxSphere;
            break;
        case "animatedslides":
            Component = AnimatedSlides;
            break;
        case "concentriccircles":
            Component = ConcentricCircles;
            break;
        case "counter":
            Component=Counter;
            break;
        default:
            return <div style={{ color: "red" }}>Error: Animation "{animationName}" not found.</div>;
    }

    return (
        <Suspense fallback={<div>Loading {animationName}...</div>}>
            <Component {...props} />
        </Suspense>
    );
};

export default AnimationRenderer;
