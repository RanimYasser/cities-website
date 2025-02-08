import React from 'react';
import ScrollImageSequence from '../../Animations/ScrollImagesSequence/ScrollImagesSequence';
import ObjectCarousel from '../../Animations/ObjectCarousel/ObjectCarousel';
import ImageComparisonCarousel from '../../Components/Carousels/ImageComparisonCrousel/ImageComparisonCarousel';
function KawstDigitalTwin() {
  const images = [
    '/Media/Images/Envision.png',
    '/Media/Images/Flood.png',
    '/Media/Images/hero/Panorama.jpg',
    '/Media/Images/hero/0004.png',
];

  return (
    <div>
      <ScrollImageSequence />
      <ImageComparisonCarousel />
    </div>
  )
}

export default KawstDigitalTwin