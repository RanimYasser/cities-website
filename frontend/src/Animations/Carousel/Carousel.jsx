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
        maxWidth: "100%",
        overflow: "hidden",
        backgroundColor: theme.palette.primary.main,
        padding: "4vh 0",
      }}
    >
      <Box className="embla" ref={emblaRef} sx={{ overflow: "hidden", width: "100%" }}>
        <Box
          className="embla__container"
          sx={{
            display: "flex",
            transition: "transform 0.3s ease-out",
            gap: isMobile ? "2%" : isTablet ? "3%" : "2%",
          }}
        >
          {slides.map((slide, index) => (
            <Box
              key={index}
              className="embla__slide"
              sx={{
                flex: `0 0 ${isMobile ? "85%" : isTablet ? "45%" : "26%"}`,
                marginTop: "2%",
                marginLeft: "2rem",
                marginRight: "2rem",
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
                  height: "60vh",
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "10px",
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
                    bottom: "0vh",
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

      {/* Navigation Arrows */}
      <Button
        onClick={scrollPrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: "2vw",
          transform: "translateY(-50%)",
          zIndex: 10,
          minWidth: "60px",
          minHeight: "60px",
          borderRadius: "50%",
          fontSize: "2vw",
      
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
         
        }}
      >
        &#9664; {/* Left arrow */}
      </Button>

      <Button
        onClick={scrollNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: "2vw",
          transform: "translateY(-50%)",
          zIndex: 10,
          minWidth: "60px",
          minHeight: "60px",
          borderRadius: "50%",
          fontSize: "2vw",
         
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
         
        }}
      >
        &#9654; {/* Right arrow */}
      </Button>
    </Box>
  );
};

export default Carousel;
