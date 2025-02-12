import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Typography } from "@mui/material";

const Carousel = ({ slides, loop = false }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:40em)"); // ~640px
  const isTablet = useMediaQuery("(max-width:60em)"); // ~960px

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop,
    speed: 5,
    dragFree: true
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "96%",
        overflow: "hidden",
        backgroundColor: theme.palette.primary.main,
        height: "60vh",
      }}
    >
      <Box className="embla" ref={emblaRef} sx={{ overflow: "hidden", width: "100%" }}>
        <Box
          className="embla__container"
          sx={{
            display: "flex",
            transition: "transform 0.3s ease-out",
            gap: isMobile ? "2%" : isTablet ? "3%" : "0%",
          }}
        >
          {slides.map((slide, index) => (
            <Box
              key={index}
              className="embla__slide"
              sx={{
                flex: `0 0 ${isMobile ? "85%" : isTablet ? "45%" : "23%"}`,
                marginTop: "0%",
                marginLeft: "1rem",
                
                marginRight: "1rem",
                overflow: "visible",
                cursor: "pointer",
                transition: "transform 0.3s ease-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: `0 1vh 4vh ${theme.palette.shadow}`,
                },
              }}
            >
              <Box
                className="embla__slide__inner"
                sx={{
                  width: "100%",
                  height: "50vh",
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  transition: "border-radius 0.3s ease",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  "&:hover": {
                    borderRadius: "50%",
                  },
                }}
              ></Box>

              {/* Title Below Image */}
              <Typography
                variant="h6"
                sx={{
                  marginTop: "1vh",
                  textAlign: "center",
                  fontSize: isMobile ? "3vw" : "1.5vw",
                  fontWeight: "bold",
                  color: theme.palette.text.primary,
                }}
              >
                {slide.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Carousel;
