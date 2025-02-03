import React, { Suspense } from "react";
import { Box } from "@mui/material";
import AnimationRenderer from "./AnimationRenderer";
import MediaWithText from "../Components/MediaWithText";
import Text from "../Components/Text";

const Loader = ({ content }) => {
  if (!content) return null;

  const { type, props } = content;

  switch (type) {
    case "text+media":
      return <MediaWithText media={props.media} texts={props.texts} style={props.style} />;

    case "text":
      return <Text content={[{ text: props.title, fontSize: "2rem", fontWeight: "bold" }, { text: props.description }]} style={props.style} />;

    case "container":
      return (
        <Box sx={props.backgroundStyle}>
          {props.subsections.map((sub, index) => (
            <Loader key={index} content={sub} />
          ))}
        </Box>
      );

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
