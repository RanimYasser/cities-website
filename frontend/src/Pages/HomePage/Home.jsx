import React from "react";
import { useMediaQuery } from "@mui/material";
import theme from "../../theme";
import Loader from "../../Renderer/Loader";
import VideoTransitionPage from "../../Animations/Game/VideoTransitionPage";
const Home = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const pageData = {
    page: "home",
    sections: [
      //  **FIRST SECTION: HERO (Video + Text + Subsections)**
   
      {
        "type": "text+media",
        "props": {
          "media": {
            "type": "video",
            "src": "/Media/Videos/homePageHeroSection.mp4",
            "alt": "Urban Planning Video",
            "autoplay": true,
            "loop": true,
            "muted": true,
            "style": {
              "height": "100vh",
              "width": "100vw",
              "objectFit": "cover",
              "position": "absolute",
              "top": 0,
              "left": 0,
              "zIndex": -1
            }
          },
          "texts": [
            {
              "section": "main",
              "type": "paragraph",
              "content": "REVOLUTIONIZING URBAN PLANNING PROCESSES THROUGH GAMING ENGINES AND DIGITAL TWINS TECHNOLOGY",
              "style": {
                "fontSize": "1.9rem",
                "fontWeight": "bold",
                "color": "#FFFFFF",
                "marginBottom": "1vh",
                "marginTop": "10vh",
                "textAlign": "left",
                "width": "40vw",
                "zIndex": 1
              }
            },
            {
              "section": "main",
              "type": "button",
              "content": "Learn More",
              "link": "/learn-more",
              "icon": "+",
              "style": {
                "onHover": false,
                "color": "#FFFFFF",
                "fontSize": "1.2rem",
                "backgroundColor": "transparent",
                "fontWeight": "bold",
                "padding": "10px 20px",
                "width": "auto",
                "marginTop": "2vh",
                "marginLeft": "-62vw",
                "zIndex": 1
              }
            },
            {
              "section": "subsection",
              "content": [
                {
                  "title": "Our Services",
                  "description": "We provide urban planning solutions powered by gaming engines and digital twins technology.",
                  "style": {
                    "titleFontSize": "1.5rem",
                    "titleFontWeight": "bold",
                    "titleColor": "#FFFFFF",
                    "descFontSize": "0.8rem",
                    "descColor": "#FFFFFF",
                    "width": "30vw",
                    "textAlign": "left",
                    "marginBottom": "2vh"
                  }
                },
                {
                  "title": "Why Digital Twins?",
                  "description": "Digital Twins enable smarter decision-making through real-time data visualization and AI-powered analytics.",
                  "style": {
                    "titleFontSize": "1.2rem",
                    "titleFontWeight": "bold",
                    "titleColor": "#FFFFFF",
                    "descFontSize": "1rem",
                    "descColor": "#FFFFFF",
                    "width": "30vw",
                    "textAlign": "left",
                    "marginBottom": "2vh"
                  }
                }
              ],
              "style": {
                "display": "flex",
                "justifyContent": "space-between",
                "alignItems": "center",
                "width": "100%",
                "gap": "16vw",
                "marginTop": "30vh"
              }
            }
          ],
          "style": {
            "height": "100vh",
            "padding": "5vh 3vw",
            "marginLeft": "3%",
            "marginRight": "10%",
            "position": "relative",
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "space-between",
            "alignItems": "flex-start",
            "gradientOverlay": {
              "height": "100%",
              "width": "100%",
              "position": "absolute",
              "bottom": 0,
              "left": 0,
              "zIndex": 0,
              "background": "linear-gradient(to top, rgba(4,37,22,1), transparent)"
            }
          }
        }
      }
,      

      //  **SECOND SECTION: TEXT + CAROUSEL**
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
                  marginLeft:"0vw",
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
  
      //  ** PARALLAX SPHERE**
      {
        "type": "animation",
        "props": {
          "animationName": "parallaxSphere",
          "backgroundImage": "/Media/Images/DigitalCity_Ring.jpeg",
          "title": "KAUST DIGITAL TWIN",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "button": {
            "text": "Learn More",
            "link": "/kaust-digital-twin",
            "icon": "+",
            "style": {
              "color": theme.palette.primary.contrastText,
              "fontSize": "1rem",
              "fontWeight": "bold",
              "padding": "0.5rem 1rem",
              "transition": "all 0.3s ease-in-out",
              "display": "inline-flex",
              "justifyContent": "center",
              "alignItems": "center"
            },
          },
        },
      },
      
      {
        type: "animation",
        props: {
          animationName: "concentriccircles",
          backgroundStyle: {
            backgroundColor: theme.palette.primary.main, 
          },
          title: "TWIN FLOOD",
          description:
            "Flood risk mitigation through AI-driven simulations. Predict, analyze, and protect urban areas with real-time digital twin insights.",
          button: {
            text: "Learn More",
            link: "/learn-more",
            icon: "+",
            style: {
              color: "white",
              fontSize: "1rem",
              backgroundColor: "transparent",
              fontWeight: "bold",
             
              transition: "all 0.3s ease-in-out",
            },
          },
        },
      },

      // **FOURTH SECTION: Panorama ANIMATION**

      {
        type: "animation",
        props: {
          animationName: "panorama",
          image: "/Media/Images/Panorama.png",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          descriptionStyles: {  
            fontSize: isMobile ? "0.8rem" : "1rem",
            maxWidth: isMobile ? "90%" : "50%",
            color: "#ffffff",
            opacity: "1",
            textAlign: "center",
            margin: "0 auto",
            marginTop: "90vh",
            marginLeft: "90vw",
            width: "50vw",
          },
          button: {
            text: "Learn More",
            link: "/learn-more",
            icon: "+",
            style: {
              color: "#ffffff",
              fontSize: "0.9rem",
              backgroundColor: "transparent",
              fontWeight: "bold",
              width: "20vw",
              display: "block",
              border: "none",
              marginLeft: "90vw", 
           
            },
          },
          style: {  
            display: "flex",
            flexDirection: "column",
            alignItems: "center", 
            justifyContent: "center", 
            textAlign: "center",
            height: "100vh",
            position: "relative",
            padding: "0 5vw",
          },
          overlay: {  
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.4)",  // ✅ Slight overlay for better contrast
          },
        },
      }
    ],
  };

  return (
    <>
      {pageData.sections.map((section, index) => (
             <Loader key={index} content={section} />
           ))}
           <VideoTransitionPage/>
    </>
  );
};

export default Home;
