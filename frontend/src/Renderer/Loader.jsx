import React, { Suspense } from "react";
import { Box } from "@mui/material";
import AnimationRenderer from "./AnimationRenderer";
import MediaWithText from "../Components/MediaWithText";
import Text from "../Components/Text";
import Button from "../Components/Button";
import ObjectCarousel from "../Components/Carousels/ObjectCarousel/ObjectCarousel";
const Loader = ({ content }) => {
  if (!content) return null;

  const { type, props } = content;

  switch (type) {
    case "text+media":
      return <MediaWithText media={props.media} texts={props.texts} style={props.style} />;

      case "text":
      console.log("✅ Rendering Text Component:", props); 
      return (
        <Box sx={{...props.style }}>
          <Text content={[{ text: props.title }, { text: props.description }]} style={props.style} />
        </Box>
      );
        case "button":
      return (
        <Button
          text={props.text}
          icon={props.icon}
          onClick={props.onClick}
          href={props.link}
          style={props.style}
          onHover={props.onHover}
          variant={props.variant}
          size={props.size}
        />
      );
    case "container":
      return (
        <Box sx={props.backgroundStyle}>
          {props.subsections.map((sub, index) => (
            <Loader key={index} content={sub} />
          ))}
        </Box>
      );

    case "objectcarousel": // ✅ Added support for ObjectCarousel
      return <ObjectCarousel {...props} />;

    case "animation":
      return (
        <Suspense fallback={<div>Loading animation...</div>}>
          <AnimationRenderer {...props} />
        </Suspense>
      );

    default:
      return <Box>Error: Unknown content type "{type}"</Box>;
  }
};

export default Loader;
