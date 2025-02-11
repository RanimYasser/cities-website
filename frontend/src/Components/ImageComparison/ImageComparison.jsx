import React from "react";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import './ImageComparison.css';
const ImageComparison = ({ realImage, virtualImage }) => {
  return (
    <div className="image-comparison">
      <ImgComparisonSlider className="img-comparison-slider">
        <img slot="first" src={realImage} alt="Real Environment" />
        <img slot="second" src={virtualImage} alt="Virtual Environment" />
      </ImgComparisonSlider>
    </div>
  );
};

export default ImageComparison;
