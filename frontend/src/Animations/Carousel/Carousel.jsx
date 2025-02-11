import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Button, Typography } from "@mui/material";

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
        height:"60vh",
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
                marginTop: "1%",
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
                  "&:hover": {
                    borderRadius: "50%", // Circle effect on hover
                  }
                }}
              >
                {/* Title Label */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "4vh",
              
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100%",
                    backgroundColor: `rgba(${theme.palette.primary.dark.replace("rgb(", "").replace(")", "")}, 0.6)`,
                    color: "#fff",
                    textAlign: "center",
                    padding: "1vh 0",
                    borderRadius: "1vh",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: isMobile ? "3vw" : "1.5vw",
                      fontWeight: "bold",
                    }}
                  >
                    {slide.title}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

    </Box>
  );
};

export default Carousel;
