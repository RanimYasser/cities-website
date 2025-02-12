import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Button from "./Button";

const MediaWithText = ({ media, texts, style = {} }) => {
  const theme = useTheme();

  // Default styles
  const defaultStyles = {
    container: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      overflow: "hidden",
      height: "100vh",
      width: "100%",
    },
    media: {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: -1,
      objectFit: "cover",
      height: "100vh", // Default height
      width: "100%", // Default width
    },
    gradientOverlay: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "40%",
     
      zIndex: 0,
    },
    contentBox: {
      position: "relative",
      zIndex: 1,
      display: "flex",
      flexDirection: "column",
      padding: "5vh 3vw",
      color: theme.palette.primary.contrastText,
      maxWidth: "70vw",
      gap: "2vh",
    },
    subsection: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      width: "100%",
      gap: "10vw",
    },
  };

  return (
    <Box sx={{ ...defaultStyles.container, ...style.container }}>
      {/* Background Media (Image or Video) */}
      <Box
        component={media.type === "video" ? "video" : "img"}
        src={media.src}
        {...(media.type === "video"
          ? {
              autoPlay: media.autoplay,
              muted: media.muted,
              loop: media.loop,
              playsInline: true,
              preload: "auto",
            }
          : {
              alt: media.alt,
              loading: "lazy",
              "aria-hidden": "true",
            })}
        sx={{
          ...defaultStyles.media,
          ...(media.style || {}), // ✅ Ensures media styles override defaults
        }}
      />

      {/* Gradient Overlay (conditionally applied) */}
      {style.gradientOverlay !== false && (
        <Box sx={{ ...defaultStyles.gradientOverlay, ...style.gradientOverlay }} />
      )}

      {/* Content Box */}
      <Box sx={{ ...defaultStyles.contentBox, ...style.contentBox }}>
        {texts.map((textItem, index) => {
          if (textItem.section === "main") {
            return textItem.type === "paragraph" ? (
              <Typography key={index} variant="body1" sx={{ ...textItem.style }}>
                {textItem.content}
              </Typography>
            ) : textItem.type === "button" ? (
              <Button
                key={index}
                text={textItem.content}
                icon={textItem.icon}
                href={textItem.link}
                style={{ ...textItem.style }}
              />
            ) : null;
          }
          return null;
        })}

        {/* Subsections */}
        <Box sx={{ ...defaultStyles.subsection, ...style.subsection }}>
          {texts
            .filter((text) => text.section === "subsection")
            .flatMap((textItem) =>
              textItem.content.map((subsection, subIndex) => (
                <Box
                  key={subIndex}
                  sx={{
                    width: subsection.style.width,
                    textAlign: subsection.style.textAlign,
                    marginBottom: "2vh",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: subsection.style.titleFontSize || "1.2rem",
                      fontWeight: subsection.style.titleFontWeight || "bold",
                      color: subsection.style.titleColor || "#ffffff",
                    }}
                  >
                    {subsection.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: subsection.style.descFontSize || "1rem",
                      color: subsection.style.descColor || "#ffffff",
                      marginTop: "0.5vh",
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
