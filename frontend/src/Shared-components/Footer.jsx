import React from "react";
import { Box, Grid, Typography, TextField, Button, IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import {FaBehance} from "react-icons/fa";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: "3rem 5vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid container spacing={4} justifyContent="space-between" alignItems="center">
        {/* Left Section - Logo & Contact Form */}
        <Grid item xs={12} md={4} textAlign={isMobile ? "center" : "left"}>
          <Typography variant="h6" fontWeight="bold">
            CITIESS.OS
          </Typography>
          <Typography variant="subtitle2" fontStyle="italic" mt={1}>
            Get in touch with us
          </Typography>

          {/* Email Subscription */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexDirection: isMobile ? "column" : "row",
              mt: 2,
            }}
          >
            <TextField
              variant="outlined"
              placeholder="you@example.com"
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                flex: 1,
                minWidth: isMobile ? "90%" : "auto",
              }}
              InputProps={{
                sx: { height: "4vh",padding: "0 1rem" },
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'transparent',
                color: theme.palette.primary.contrastText,
                textTransform: "none",
                "&:hover": { backgroundColor: theme.palette.primary.light },
              }}
            >
              Send
            </Button>
          </Box>
        </Grid>

        {/* Center Section - Copyright */}
        <Grid item xs={12} md={4} textAlign="center">
          <Typography variant="body2" sx={{ maxWidth: "50vw", margin: "0 auto",marginTop: "7rem" }}>
            © {new Date().getFullYear()} CITIESS.OS - All rights reserved.
          </Typography>
        </Grid>

        {/* Right Section - Navigation & Social Media */}
        <Grid item xs={12} md={4} textAlign={isMobile ? "center" : "right"}>
          {/* Navigation Links */}
          <Box
            sx={{
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-end",
              flexWrap: "wrap",
              gap: "0.9rem",
              fontSize: "0.5rem",
              fontWeight: "bold",
              width: isMobile?"100vw":"35vw",
              marginTop : "1vh",
           overflow: "hidden",
            }}
          >
            <Typography component="a" href="#" sx={{ textDecoration: "none", color: "inherit",fontSize:isMobile?"0.5rem":"0.7rem" }}> 
              HOME
            </Typography>
            <Typography component="a" href="#" sx={{ textDecoration: "none", color: "inherit",fontSize:isMobile?"0.5rem":"0.7rem" }}>
              SERVICES
            </Typography>
            <Typography component="a" href="#" sx={{ textDecoration: "none", color: "inherit",fontSize:isMobile?"0.5rem":"0.7rem" }}>
              DIGITAL CITIES
            </Typography>
            <Typography component="a" href="#" sx={{ textDecoration: "none", color: "inherit" ,fontSize:isMobile?"0.5rem":"0.7rem"}}>
              ABOUT US
            </Typography>
            <Typography component="a" href="#" sx={{ textDecoration: "none", color: "inherit" ,fontSize:isMobile?"0.5rem":"0.7rem"}}>
              BLOG
            </Typography>
            <Typography component="a" href="#" sx={{ textDecoration: "none", color: "inherit",fontSize:isMobile?"0.5rem":"0.7rem",marginRight:"5vw" }}>
              CONTACT US
            </Typography>
          </Box>

          {/* Social Media Icons */}
          <Box sx={{ display: "flex", justifyContent: isMobile ? "center" : "flex-end", mt: 2, gap: 2 }}>
            <IconButton href="#" sx={{ color: "white" }}>
            <FaBehance/>
            </IconButton>
            <IconButton href="#" sx={{ color: "white" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: "white" }}>
              <InstagramIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
