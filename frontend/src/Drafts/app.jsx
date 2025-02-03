import React from "react";
import { ThemeProvider, useMediaQuery } from "@mui/material";
import theme from "./theme";

// Components
import MediaWithText from "./Components/MediaWithText";
import Navbar from "./Shared-components/Desktop/Navbar";
import Carousel from "./Animations/Carousel/Carousel";
import Footer from "./Shared-components/Footer";
import Panorama from "./Animations/Panorama/Panorama"; // Panorama Component

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveLayout />
    </ThemeProvider>
  );
};

const ResponsiveLayout = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  // 🚀 **Hero Section Data**
  const sectionData = {
    media: {
      type: "video",
      src: "/Media/Videos/homePageHeroSection.mp4",
      alt: "Urban Planning Video",
      autoplay: true,
      loop: true,
      muted: true,
      style: {
        height: isMobile ? "100vh" : "70vh",
      },
    },
    texts: [
      {
        section: "main",
        type: "paragraph",
        content:
          "REVOLUTIONIZING URBAN PLANNING PROCESSES THROUGH GAMING ENGINES AND DIGITAL TWINS TECHNOLOGY",
        style: {
          fontSize: isMobile ? "1.2rem" : "2.5rem",
          fontWeight: "600",
          color: theme.palette.primary.contrastText,
          marginBottom: "3vh",
          marginTop: "10vh",
          textAlign: "left",
          width: isMobile ? "80vw" : "30vw",
        },
      },
      {
        section: "main",
        type: "button",
        content: "Learn More",
        link: "/learn-more",
        icon: "+",
        style: {
          onHover: false,
          color: theme.palette.primary.contrastText,
          fontSize: isMobile ? "1rem" : "1.5rem",
          backgroundColor: "transparent",
          fontWeight: "bold",
          width: "auto",
          marginTop: "1vh",
          borderRadius: "0.5em",
        },
      },
      {
        section: "subsection",
        content: [
          {
            title: "Our Services",
            description:
              "We provide urban planning solutions powered by gaming engines and digital twins technology.",
            style: {
              fontSize: isMobile ? "1.2rem" : "1.5rem",
              titleColor: theme.palette.primary.contrastText,
              descColor: theme.palette.primary.contrastText,
              width: isMobile ? "90vw" : "20vw",
            },
          },
          {
            title: "Why Digital Twins?",
            description:
              "Digital Twins enable smarter decision-making through real-time data visualization and AI-powered analytics.",
            style: {
              fontSize: isMobile ? "1.2rem" : "2.5rem",
              titleColor: theme.palette.primary.contrastText,
              descColor: theme.palette.primary.contrastText,
              width: isMobile ? "90vw" : "20vw",
              marginLeft: isMobile ? "0" : "32vw",
            },
          },
        ],
      },
    ],
    style: {
      height: "100vh",
      padding: isMobile ? "3vh 5vw" : "5vh 3vw",
      marginLeft: "3%",
      marginRight: "10%",
      gradientOverlay: {
        height: "100%",
        background: `linear-gradient(to top, ${theme.palette.primary.main}, transparent)`,
      },
    },
  };

  // 🚀 **Carousel Data**
  const carouselSlides = [
    {
      image: "/Media/Images/Envision.png",
      title: "Envision",
      subtitle: "Creating a vision for the future",
      alt: "Envisioning the future through urban planning.",
    },
    {
      image: "/Media/Images/Flood.png",
      title: "Flood Simulation",
      subtitle: "Predicting and mitigating flood risks",
      alt: "Digital Twin flood simulation.",
    },
    {
      image: "/Media/Images/Pathfinding.png",
      title: "Pathfinding",
      subtitle: "Optimizing urban mobility",
      alt: "Pathfinding solutions for smart cities.",
    },
    {
      image: "/Media/Images/Railway.png",
      title: "Railway Station",
      subtitle: "Future-proofing public transport",
      alt: "Digital Twin railway simulation.",
    },
  ];

  // 🚀 **Panorama Data**
  const panoramaData = {
    "image": "/Media/Images/Panorama.jpg",
    "title": "Envision",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "button": {
      "text": "Learn More",
      "link": "/learn-more"
    },
  }
  ;

  return (
    <>
      <Navbar />
      <MediaWithText {...sectionData} />
      <Carousel slides={carouselSlides} />
      <Panorama image={panoramaData.image} text={panoramaData.text} />
      <Footer />
    </>
  );
};

export default App;
