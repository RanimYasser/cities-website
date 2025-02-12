import React from "react";
import ScrollImageSequence from "../../Animations/ScrollImagesSequence/ScrollImagesSequence";
import ImageComparison from "../../Components/ImageComparison/ImageComparison";
import Loader from "../../Renderer/Loader";
import theme from "../../theme";
import "../../index.css";
import "./KaustDigitalTwin.css";
function KaustDigitalTwin() {
    const isMobile = window.innerWidth < 768;

    const images = [
        { src: "/Media/Images/KaustDigitalTwin/Arcs/arc2.png", text: "Image 1: Digital scanning in progress." },
        { src: "/Media/Images/KaustDigitalTwin/Arcs/arc3.png", text: "Image 2: 3D modeling for precision mapping." },
        { src: "/Media/Images/KaustDigitalTwin/Arcs/arc4.png", text: "Image 3: Data processing for AI analysis." },
        { src: "/Media/Images/KaustDigitalTwin/Arcs/arc5.png", text: "Image 4: Virtual twin simulation in action." },
    ];

    const slides = [
        {
            title: "Microclimate Analysis",
            imageSrc: "/Media/Images/KaustDigitalTwin/Slides/Microclimate.png",
            description: "Analysis of microclimate factors using AI-driven simulations and environmental modeling.",
            link: "/kaust-digital-twin/microclimate",
        },
        {
            title: "Urban Planning Scenarios And Database Visualization",
            imageSrc: "/Media/Images/KaustDigitalTwin/Slides/Urban.png",
            description: "3D modeling and database-driven analysis for efficient urban planning and land use optimization.",
            link: "/kaust-digital-twin/urban-planning",
        },
        {
            title: "Traffic Analysis And Simulation",
            imageSrc: "/Media/Images/KaustDigitalTwin/Slides/Traffic.png",
            description: "Advanced AI-based traffic modeling for optimizing road layouts and vehicle movements.",
            link: "/kaust-digital-twin/traffic-analysis",
        },
        {
            title: "Sustainability Grid",
            imageSrc: "/Media/Images/KaustDigitalTwin/Slides/Sustainability.png",
            description: "Smart energy grid and sustainability visualization to enhance efficiency and reduce waste.",
            link: "/kaust-digital-twin/sustainability",
        },
    ];
    const comparisonSlides = [
      {
          title: "Reality vs Virtual Environment",
          description: "Observe how our virtual model replicates real-world structures.",
          comparisonComponent: (
              <ImageComparison
                  realImage="/Media/Images/RealVsVirtual/RealCentral.jpg"
                  virtualImage="/Media/Images/RealVsVirtual/VirtualCentral.jpg"
              />
          ),
      },
      {
          title: "Reality vs Virtual Environment",
          description: "This comparison highlights the central area of our real and virtual environment.",
          comparisonComponent: (
              <ImageComparison
                  realImage="/Media/Images/RealVsVirtual/RealBuilding.jpg"
                  virtualImage="/Media/Images/RealVsVirtual/VirtualBuilding.jpg"
              />
          ),
      },
  ];
  const COUNTER_ITEMS = [
    { number: 100, label: "AGENTS",suffix:"+" },
    { number: 43000, label: "ASSETS" ,suffix:"+"},
    { number: 30, label: "CITY GROWTH RATE" ,suffix:"+"},
]
  const KAUST_DIGITAL_TWIN_DATA = {
      page: "kaustDigitalTwin",
      sections: [
          {
              type: "container",
              props: {
                  backgroundStyle: {
                      backgroundColor: "transparent",
                      textAlign: "center",
                      position: "relative",
                      padding: "5vh 5vw",
                  },
                  subsections: [
                      {
                          type: "text",
                          props: {
                              title: "OUR DIGITAL TWIN PROCESS",
                              description:
                                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                              style: {
                                  textAlign: "center",
                                  fontSize: isMobile ? "1.5rem" : "1rem",
                                  color: "#ffffff",
                                  width: "80%",
                                  zIndex: 100,
                                  marginBottom: "0vh",
                                  marginTop: "-8.1vh",
                              },
                          },
                      },
  
                      // First ObjectCarousel: No arrows, no dots
                      {
                          type: "objectcarousel",
                          props: {
                              items: images.map((image) => image.src),
                              textItems: images.map((image) => image.text),
                              withArrows: false,
                              withDots: false,
                              textPosition: "bottom", // Place text below the image
                              customStyles: {
                                  carouselContainer: {
                                      display: "flex",
                                      flexDirection: "column",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      width: "100%",
                                  },
                                  slideContainer: {
                                      display: "flex",
                                      flexDirection: "column", // Ensures text is below the image
                                      alignItems: "center",
                                      textAlign: "center",
                                      gap: "2vh",
                                  },
                                  imageContainer: {
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center", // Ensures image is centered
                                      width: "50vw",
                                      height: "40vw",
                                      maxWidth: "50vw",
                                      maxHeight: "50vw",
                                      overflow: "hidden",
                                  },
                                  imageStyle: {
                                      maxWidth: "30vw",
                                      maxHeight: "40vh",
                                      objectFit: "contain", // Ensures proper scaling while maintaining aspect ratio
                                      display: "block",
                                      marginTop: "-60vh",
                                  },
                                  textContainer: {
                                      marginTop: "-55vh", // Adds spacing between image and text
                                      color: "#fff",
                                      textAlign: "center",
                                      maxWidth: "80%",
                                     
                                  },
                                  titleStyle: {
                                      fontSize: "0.9rem",
                                      color: "#fff",
                                      textAlign: "center",
                                  },
                              },
                          },
                      },
  
                      {
                          type: "button",
                          props: {
                              text: "Learn More",
                              link: "/kaust-digital-twin",
                              icon: "+",
                              style: {
                                  color: "#ffffff",
                                  fontSize: "1rem",
                                  padding: "1.2vh 2.5vw",
                                  display: "inline-block",
                                  transition: "all 0.3s ease-in-out",
                                  cursor: "pointer",
                                  marginTop: "-6vh",
                              },
                          },
                      },
                  ],
              },
          },
  
          // Second ObjectCarousel: With arrows close together and dots on the right
          {
              type: "objectcarousel",
              props: {
                  items: comparisonSlides.map((slide) => slide.comparisonComponent),
                  textItems: comparisonSlides.map((slide) => slide.title),
                  descriptions: comparisonSlides.map((slide) => slide.description),
                  withArrows: true,
                  arrowLeftPosition: "15vw", // Adjust the left arrow position
                  arrowRightPosition: "15vw", 
                  withDots: true,
                  textPosition: "left",
                  customStyles: {
                      slideContainer: {
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "90%",
                          margin: "0 auto",
                      },
                      textContainer: {
                          flex: 1,
                          textAlign: "left",
                          color: "#fff",
                          maxWidth: "40%",
                      },
                      imageContainer: {
                          flex: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          maxWidth: "100vw",
                      },
                      titleStyle: {
                          fontSize: "2rem",
                          fontWeight: "bold",
                          color: "#fff",
                      },
                      descriptionStyle: {
                          fontSize: "1.2rem",
                          color: "#ccc",
                          maxWidth: "80%",
                      },
                      dotContainerStyle: {
                          position: "absolute",
                          bottom: "20px",
                          left: "70%",
                          transform: "translateX(-50%)",
                          display: "flex",
                          gap: "8px",
                          zIndex: 1,
                      },
                      rightArrowStyle: {
                          left: "88vw",
                      },
                      leftArrowStyle: {
                          right: "11vw",
                      },
                  },
              },
          },
  
          {
            type: "container",
            props: {
                backgroundStyle: {
                    backgroundColor: "#042516",
                    textAlign: "center",
                    position: "relative",
                    padding: "25vh 5vw",
                    borderRadius: "10px",
                },
                subsections: [
                    {
                        type: "text",
                        props: {
                            title: "KAUST CITY DIGITAL TWIN MODEL CAPTURES THE LIFE OF RESIDENTS WITH DETAILED FEATURES",
                            description: "The life of residents with detailed features.",
                            style: {
                                textAlign: "center",
                                fontSize: "1.3rem",
                                fontWeight: "bold",
                                color: "#ffffff",
                                marginBottom: "3vh",
                            },
                        },
                    },

                    // ✅ Counter Animation via AnimationRenderer
                    {
                        type: "animation",
                        props: {
                            animationName: "counter",
                            items: COUNTER_ITEMS,
                            customStyles: {
                                container: {
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: "5vw",
                                    flexWrap: "wrap",
                                    marginTop: "3vh",
                                },
                                counterItem: {
                                    textAlign: "center",
                                    color: "#ffffff",
                                    fontWeight: "bold",
                                },
                            },
                        },
                    },
                ],
            },
    
},
{
    "type": "text+media",
    "props": {
      "media": {
        "type": "image",
        "src": "/Media/Images/bubbles.gif",
        "alt": "bubbles",
        "autoplay": true,
        "loop": true,
        "muted": true,
        "style": {
          "height": "50vh",  // Adjust height dynamically
          "objectFit": "cover",
          "width": "50vw",    // Corrected width
          "position": "absolute",
          "top": 250,
          "left":"22%",
          "zIndex": -1
        }
      },
      "texts": [
        {
          "section": "main",
          "type": "paragraph",
          "content": "OUR POPULATION MODEL - BASED APPROACH FOR VIRTUAL TWIN",
          "style": {
            "fontSize": "1.5rem",
            "fontWeight": "bold",
            "color": "#FFFFFF",
            "marginBottom": "66vh",
            "marginLeft": "0vw",
            "marginTop": "10vh",
            "textAlign": "left",
            "width": "35vw",
            "zIndex": 1,
            "textAlign":"center",
          }
        },
        {
          "section": "main",
          "type": "paragraph",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
          "style": {
            "fontSize": "1rem",
            "color": "#FFFFFF",
            "width": "50vw",
            "zIndex": 1,
            "marginTop":"-65vh",
            "marginBottom":"99vh",
            "marginLeft":"-7vw",

          }
        },
        {
          "section": "main",
          "type": "button",
          "content": "VIEW DEMO",
          "link": "/demo",
          "icon": "ArrowForward", 
          "style": {
            "color": "#FFFFFF",
            "fontSize": "1rem",
            "backgroundColor": "transparent",
            "fontWeight": "bold",
            "width": "auto",
            "marginTop": "-50vh",
            "marginLeft":"-9vw",
            "zIndex": 1,
            "textAlign": "center",
            "display": "inline-block"
          }
        }
      ],
      "style": {
        "container": {
          "position": "relative",
          "display": "flex",
          "flexDirection": "column",
          "alignItems": "center",
          "justifyContent": "center",
          "height": "100vh",
          "width": "100%",
          "padding": "5vh 3vw",
          "textAlign": "center",
          "zIndex": 1
        },
        "overlay": {
          "background": "rgba(0, 128, 0, 0.4)",  // ✅ Semi-transparent green overlay
          "position": "absolute",
          "top": 0,
          "left": 0,
          "width": "100%",
          "height": "100%",
          "zIndex": 0
        }
      }
    }
  },
  
          
          
          // Third ObjectCarousel: With arrows distant from each other and dots centered
          {
              type: "objectcarousel",
              props: {
                  items: slides.map((slide) => slide.imageSrc),
                  textItems: slides.map((slide) => slide.title),
                  descriptions: slides.map((slide) => slide.description),
                  links: slides.map((slide) => slide.link),
                  withArrows: true,
                  withDots: true,
                  arrowLeftPosition: "1vw", // Adjust the left arrow position
                  arrowRightPosition: "15vw", 
                  customStyles: {
                      slideContainer: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          margin: "0 auto",
                          marginBottom:"10vh",
                         
                      },
                      imageContainer: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "min(40vw, 50vh)",
                          height: "min(50vw, 70vh)",
                          maxWidth: "60vw",
                          maxHeight: "50vh",
                          overflow: "hidden",
                          "borderRadius": "50%", 
                        
                      },
  
                      imageStyle: {
                          width: "50vw", // Ensures the image fills the container
                          height: "50vw", // Maintains aspect ratio
                          objectFit: "contain", // Ensures the full image is visible without cropping
                          display: "block",
                      },
  
                      textContainer: {
                          flex: 1,
                          textAlign: "left",
                          color: "#fff",
                      },
                      titleStyle: {
                          fontSize: "1.5rem",
                          fontWeight: "bold",
                          color: "#fff",
                          width: "30vw",
                      },
                      descriptionStyle: {
                          fontSize: "1rem",
                          color: "#ccc",
                          maxWidth: "70%",
                      },
                      buttonStyle: {
                          color: "#fff",
                          padding: "10px 20px",
                          marginTop: "2vh",
                          textDecoration: "none",
                      },
                      dotContainerStyle: {
                          position: "absolute",
                          bottom: "20vh",
                          left: "50%",
                          transform: "translateX(-50%)",
                          display: "flex",
                          gap: "8px",
                          zIndex: 1,
                      },
                      rightArrowStyle: {
                          left: "87vw",
                      },
                      leftArrowStyle: {
                          left: "2vw",
                      },
                  },
              },
          },
          {
            type: "text+media",
            props: {
                media: {
                    type: "image",
                    src: "/Media/Images/CityPlanning.jpg", 
                    alt: "City Planning with Gaming Engines",
                    style: {                     
                        objectFit: "cover",
                        position: "absolute",
                        marginTop: "21vh",
                        width:"100vw",
                        height:"80vh",
                        left: 0,
                        bottom:0,
                        zIndex: -2,
                    },
                },
                texts: [
                    {
                        section: "main",
                        type: "paragraph",
                        content: "USING GAMING ENGINES IN CITY PLANNING",
                        style: {
                            fontSize: "2rem",
                            fontWeight: "bold",
                            textAlign: "center",
                            color: "#ffffff",
                            marginBottom: "1vh",
                            marginLeft:"22vw",
                            marginTop:"20vh",
                        },
                    },
                    {
                        section: "main",
                        type: "paragraph",
                        content:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                        style: {
                            fontSize: "1rem",
                            textAlign: "center",
                            color: "#B0B0B0",
                            marginBottom: "3vh",
                            marginLeft:"22vw",
                            marginTop:"0vh",
                        },
                    },
                    {
                        section: "main",
                        type: "button",
                        content: "BLOG →",
                        link: "/blog",
                        style: {
                            fontSize: "1rem",
                            fontWeight: "bold",
                            color: "#ffffff",
                            textTransform: "uppercase",
                            textDecoration: "none",
                            marginLeft:"22vw",
                            paddingBottom: "2px",
                            transition: "opacity 0.3s ease-in-out",
                            textAlign: "center",
                            display: "inline-block",
                            
                        },
                    },
                ],
                "style": {
                    "gradientOverlay": {
                      "height": "100%",
                      "width": "100%",
                      "zIndex": 0,
                      "background": "linear-gradient(to bottom, rgba(4,37,22,1), transparent 90%), linear-gradient(to top, rgba(4,37,22,1), transparent 90%)",
                      "position": "absolute",
                        "top": 0,
                      "left": 0     
                    },
                },
            },
        },
    
      ],
  };
  
    return (
        <div>
            <ScrollImageSequence />
            {KAUST_DIGITAL_TWIN_DATA.sections.map((section, index) => (
                <Loader key={index} content={section} />
            ))}
        </div>
    );
}

export default KaustDigitalTwin;
