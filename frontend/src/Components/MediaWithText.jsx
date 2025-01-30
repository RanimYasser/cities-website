import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Button from "./Button";

const MediaWithText = ({ media, texts, style = {} }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        height: style.height || "100vh",
        width: style.width || "100%", // Added width
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        overflow: "hidden",
      }}
    >
      {/* Background Media */}
      <Box
        component={media.type === "video" ? "video" : "img"}
        src={media.src}
        autoPlay={media.autoplay}
        muted={media.muted}
        loop={media.loop}
        playsInline
        alt={media.alt}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: style.objectFit || "cover",
          zIndex: -1,
        }}
      />

      {/* Gradient Overlay */}
      {style.gradientOverlay && (
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: style.gradientOverlay.width || "100%", // Added width
            height: style.gradientOverlay.height || "40%",
            background: style.gradientOverlay.background || "linear-gradient(to top, #042516, transparent)",
            zIndex: 0,
          }}
        />
      )}

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: style.padding || "5vh 3vw",
          color: style.color || theme.palette.primary.contrastText,
          maxWidth: style.maxWidth || "70vw",
          width: style.contentWidth || "100%", // Added width
          gap: style.gap || "2vh",
        }}
      >
        {/* Main Section */}
        {texts.map((textItem, index) => {
          if (textItem.section === "main") {
            switch (textItem.type) {
              case "paragraph":
                return (
                  <Typography
                    key={index}
                    variant="body1"
                    sx={{
                      fontSize: textItem.style?.fontSize || "2rem",
                      lineHeight: textItem.style?.lineHeight || "1.5",
                      color: textItem.style?.color || "inherit",
                      marginBottom: textItem.style?.marginBottom || "10vh",
                      marginTop: textItem.style?.marginTop || "0vh",
                      textAlign: textItem.style?.textAlign || "left",
                      maxWidth: textItem.style?.width || "100%", // Added width
                      fontWeight: textItem.style?.fontWeight || "bold",
                      width: textItem.style?.width || "100%", // Added width
                    }}
                  >
                    {textItem.content}
                  </Typography>
                );
              case "button":
                return (
                  <Button
                    key={index}
                    text={textItem.content}
                    icon={textItem.icon}
                    href={textItem.link}
                    style={{
                      color: textItem.style?.color || theme.palette.primary.contrastText,
                      backgroundColor: textItem.style?.backgroundColor || "transparent",
                      fontSize: textItem.style?.fontSize || "1rem",
                      fontWeight: textItem.style?.fontWeight || "bold",
                      marginTop: "1vh",
                      width: textItem.style?.width || "auto", // Added width
                    }}
                  />
                );
              default:
                return null;
            }
          }
          return null;
        })}

        {/* Subsections */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: style.subsectionJustifyContent || "space-between",
            width: style.subsectionWidth || "100%", // Added width
            gap: style.subsectionGap || "2vw",
            marginTop: style.subsectionMarginTop || "5vh",
          }}
        >
          {texts
            .filter((text) => text.section === "subsection")
            .flatMap((textItem) =>
              textItem.content.map((subsection, subIndex) => (
                <Box
                  key={subIndex}
                  sx={{
                    flex: "1 1 calc(50% - 2vw)", // Responsive width for subsections
                    marginBottom: subsection.style?.marginBottom || "0",
                    width: subsection.style?.width || "auto", // Added width
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: subsection.style?.titleFontSize || "1.2rem",
                      fontWeight: subsection.style?.titleFontWeight || "bold",
                      color: subsection.style?.titleColor || theme.palette.primary.main,
                      marginBottom:subsection.style?.marginBottom|| "1vh",
                      marginRight: subsection.style?.marginRight|| "1vw",
                      marginTop: subsection.style?.marginTop|| "1vh",
                      marginLeft: subsection.style?.marginLeft|| "1vw",
                      width: subsection.style?.titleWidth || "100%", // Added width
                    }}
                  >
                    {subsection.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: subsection.style?.descFontSize || "1rem",
                      lineHeight: subsection.style?.lineHeight || "1.5",
                      color: subsection.style?.descColor || theme.palette.text.secondary,
                      marginBottom:subsection.style?.marginBottom|| "1vh",
                      marginRight: subsection.style?.marginRight|| "1vw",
                      marginTop: subsection.style?.marginTop|| "1vh",
                      marginLeft: subsection.style?.marginLeft|| "1vw",
                      width: subsection.style?.width || "100%", // Added width
                    }}
                  >
                    {subsection.description}
                  </Typography>
                </Box>
              ))
            )} 
        </Box>
      </Box>
    </Box>
  );
};

export default MediaWithText;
