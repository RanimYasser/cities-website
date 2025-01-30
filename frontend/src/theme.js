import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#042516", // Dark Green 2
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#daaE6c", // Accent Gold
      contrastText: "#042516", // Dark Green 1 for contrast
    },
    text: {
      primary: "#042516", // Dark Green 1
      secondary: "#064127", // Dark Green 3
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: {
      fontSize: "48px",
      fontWeight: "bold",
      color: "#042516", // Dark Green 1
    },
    h2: {
      fontSize: "36px",
      fontWeight: "bold",
      color: "#064127", // Dark Green 3
    },
    body1: {
      fontSize: "16px",
      color: "#063f25", // Dark Green 2
    },
  },
});

export default theme;
