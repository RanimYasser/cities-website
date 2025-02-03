import React, { lazy, Suspense } from "react";

const Carousel = lazy(() => import("../Animations/Carousel/Carousel"));
const Panorama = lazy(() => import("../Animations/Panorama/Panorama"));
const ParallaxSphere = lazy(() => import("../Animations/ParallaxSphere/ParallaxSphere"));
const AnimationRenderer = ({ animationName, ...props }) => {
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
    default:
      return <div>Animation "{animationName}" not found.</div>;
  }

  return (
    <Suspense fallback={<div>Loading {animationName}...</div>}>
      <Component {...props} />
    </Suspense>
  );
};

export default AnimationRenderer;
