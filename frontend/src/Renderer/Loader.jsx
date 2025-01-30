import React, { Suspense } from 'react';
import AnimationRenderer from './AnimationRenderer';
import Text from '../Components/Text';
import Media from '../Components/Media';
import MediaWithText from '../Components/MediaWithText';
import Button from '../Components/Button';
const Loader = ({ content }) => {
  const { type, props } = content;

  switch (type) {
    case 'animation':
      return <AnimationRenderer {...props} />;
    case 'text':
      return <Text {...props} />;
    case 'media':
      return <Media {...props} />;
    case 'text+media':
      return <MediaWithText {...props} />;
    case 'button':
      return <Button {...props} />;
    default:
      return <div>Unknown content type</div>;
  }
};

export default Loader;
