import React, { Suspense } from "react";

const AnimationRenderer = ({ animationName, props }) => {
  if (!animationName) {
    return <div style={{ color: "red" }}>Error: No animation name provided.</div>;
  }

  try {
    // Ensure correct path and module exists
    const AnimationComponent = React.lazy(async () => {
      try {
        const module = await import(`../Animations/${animationName}.jsx`);
        if (!module || !module.default) {
          throw new Error(`Module ${animationName} does not have a default export.`);
        }
        return module;
      } catch (error) {
        console.error(`Error loading animation: ${animationName}`, error);
        return { default: () => <div style={{ color: "red" }}>Animation "{animationName}" not found.</div> };
      }
    });

    return (
      <Suspense fallback={<div>Loading animation...</div>}>
        <AnimationComponent {...props} />
      </Suspense>
    );
  } catch (error) {
    console.error(`Failed to load animation: ${animationName}`, error);
    return <div style={{ color: "red" }}>Failed to load animation: {animationName}</div>;
  }
};

export default AnimationRenderer;
