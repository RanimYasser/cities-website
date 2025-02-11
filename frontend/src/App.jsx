import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, useMediaQuery } from "@mui/material";
import theme from "./theme";
import "./index.css";
// Components
import Navbar from "./Shared-components/Desktop/Navbar";
import Footer from "./Shared-components/Footer";

import AnimatedSlides from "./Animations/AnimatedSlides/AnimatedSlides";

// Pages
import Home from "./Pages/HomePage/Home";

import KaustDigitalTwin from "./Pages/kawstDigitalTwin/KawstDigitalTwin";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kaust-digital-twin" element={<KaustDigitalTwin />} />
       
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
