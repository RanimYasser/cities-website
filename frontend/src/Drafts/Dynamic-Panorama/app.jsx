import React from "react";
import { ThemeProvider, useMediaQuery } from "@mui/material";
import theme from "./theme";

// Components
import Navbar from "./Shared-components/Desktop/Navbar";
import Footer from "./Shared-components/Footer";
import Loader from "./Renderer/Loader"; // Dynamic Loader

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveLayout />
    </ThemeProvider>
  );
};

const ResponsiveLayout = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const pageData = {
    page: "home",
    sections: [
      //  **FIRST SECTION: HERO (Video + Text + Subsections)**
      {
        type: "text+media",
        props: {
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
                       fontSize: isMobile ? "1.2rem" : "2.2rem",
                       fontWeight: "600",
                       color: theme.palette.primary.contrastText,
                       marginBottom: "3vh",
                       marginTop: "10vh",
                       textAlign: "left",
                       width: isMobile ? "80vw" : "34vw",
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
        },
      },

      // 🚀 **SECOND SECTION: TEXT + CAROUSEL**
      {
        type: "container",
        props: {
          backgroundStyle: {
            backgroundColor: "rgba(4,37,22,1)",
          },
          subsections: [
            {
              type: "text",
              props: {
                title: "OUR SERVICES",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet",
                style: {
                  width: isMobile ? "90vw" : "20vw",
                  textAlign: "center",
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  marginBottom: "3vh",
                  marginLeft:"50vw",
                },
              },
            },
            {
              type: "animation",
              props: {
                animationName: "carousel",
                slides: [
                  {
                    image: "/Media/Images/Envision.png",
                    title: "Envision",
                    subtitle: "Creating a vision for the future",
                  },
                  {
                    image: "/Media/Images/Flood.png",
                    title: "Flood Simulation",
                    subtitle: "Predicting and mitigating flood risks",
                  },
                  {
                    image: "/Media/Images/Pathfinding.png",
                    title: "Pathfinding",
                    subtitle: "Optimizing urban mobility",
                  },
                  {
                    image: "/Media/Images/Railway.png",
                    title: "Railway Station",
                    subtitle: "Future-proofing public transport",
                  },
                ],
              },
            },
          ],
        },
      },

      // 🚀 **THIRD SECTION: PANORAMA ANIMATION**
      {
        type: "animation",
        props: {
          animationName: "panorama",
          image: "/Media/Images/Panorama.jpg",
          title: "Envision",
          titleStyle: {
            fontSize: "4rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "#ffffff",
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
            textAlign: "center",
          },
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          descriptionStyle: {
            fontSize: "1.2rem",
            maxWidth: "600px",
            margin: "10px auto",
            color: "#ffffff",
            opacity: "0.8",
            textAlign: "center",
          },
          button: {
            text: "Learn More",
            link: "/learn-more",
            icon: "+",
            style: {
              color: "#ffffff",
              fontSize: "1.5rem",
              backgroundColor: "transparent",
              fontWeight: "bold",
              width: "auto",
              marginTop: "1vh",
              transition: "all 0.3s ease",
            },
          },
        },
      },
      
    ],
  };

  console.log("✅ pageData.sections:", pageData.sections); // Debugging log

  return (
    <>
      <Navbar />
      {pageData.sections.map((section, index) => (
        <Loader key={index} content={section} />
      ))}
      <Footer />
    </>
  );
};

export default App;
