import React, { useState } from "react";
import { Box, Typography, TextField, Button, useTheme, useMediaQuery, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaBehance } from "react-icons/fa"; // Behance icon from react-icons

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  // State to hold email input value
  const [email, setEmail] = useState("");

  // Function to handle form submission
  const handleSendClick = () => {
    console.log("Entered Email:", email);
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: isMobile ? "5vh 5vw" : "6vh 7vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4vh",
      }}
    >
      {/* Thick White Divider */}
      <Divider
        sx={{
          width: "100%",
          borderBottom: `5px solid ${theme.palette.primary.contrastText}`,
          marginBottom: "5vh",
        }}
      />

      {/* Main Footer Row */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          flexWrap: "wrap",
          gap: isMobile ? "5vh" : "0",
        }}
      >
        {/* Left Side: Logo + Subscription Form */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2vh",
            width: isMobile ? "100%" : "30%",
            alignItems: isMobile ? "center" : "flex-start",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          {/* Logo */}
          <Typography variant="h5" sx={{ fontWeight: "bold", letterSpacing: "0.05em" }}>
            CITIES.OS
          </Typography>

          {/* Subscription Form */}
          <Typography variant="body1" sx={{ fontStyle: "italic", color: "white" }}>
            Get in touch with Us
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: isMobile ? "80%" : "350px",
              height: "3rem",
              borderRadius: "10px",
              overflow: "hidden",
              backgroundColor: theme.palette.background.paper,
              padding: "0.5vh",
              flexWrap: isMobile ? "wrap" : "nowrap",
              justifyContent: "space-between",
            }}
          >
            <TextField
              fullWidth
              placeholder="you@example.com"
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state
              InputProps={{
                disableUnderline: true,
                sx: {
                  padding: "1vh",
                  backgroundColor: theme.palette.background.paper,
                },
              }}
            />
            <Button
              onClick={handleSendClick} // Handle button click
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                borderRadius: "50px",
                padding: "1vh 3vw",
                width: "auto",
                "&:hover": { backgroundColor: theme.palette.primary.light },
              }}
            >
              Send
            </Button>
          </Box>
        </Box>

        {/* Center: Navigation Links */}
        <Box
          sx={{
            display: "flex",
            gap: isTablet ? "4vw" : "2vw",
            flexWrap: "wrap",
            justifyContent: "center",
            width: isMobile ? "100%" : "40%",
            textAlign: "center",
          }}
        >
          {["HOME", "SERVICES", "DIGITAL CITIES", "ABOUT US", "BLOG", "CONTACT US"].map((link) => (
            <Typography
              key={link}
              variant="body2"
              sx={{
                cursor: "pointer",
                fontSize: isMobile ? "0.9rem" : "0.9rem",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {link}
            </Typography>
          ))}
        </Box>

        {/* Right Side: Social Icons */}
        <Box
          sx={{
            display: "flex",
            gap: "1.5vw",
            justifyContent: isMobile ? "center" : "flex-end",
            width: isMobile ? "100%" : "20%",
          }}
        >
          <FaBehance size={24} style={{ cursor: "pointer" }} />
          <FacebookIcon sx={{ cursor: "pointer" }} />
          <InstagramIcon sx={{ cursor: "pointer" }} />
        </Box>
      </Box>

      {/* Copyright Text */}
      <Typography variant="body2" sx={{ textAlign: "center", opacity: 0.7, fontSize: "0.9rem" }}>
        COPYRIGHTS dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </Typography>
    </Box>
  );
};

export default Footer;
