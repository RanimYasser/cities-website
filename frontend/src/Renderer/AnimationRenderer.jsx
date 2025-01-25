import React, { Suspense } from 'react';

const AnimationRenderer = ({ animationName, props }) => {
  
  const AnimationComponent = React.lazy(() =>
    import(`./${animationName}`).catch(() => null)
  );

  if (!AnimationComponent) {
    return <div>Animation "{animationName}" not found</div>;
  }

  return (
    <Suspense fallback={<div>Loading animation...</div>}>
      <AnimationComponent {...props} />
    </Suspense>
  );
};

export default AnimationRenderer;
