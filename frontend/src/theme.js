import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#042516", // Darkest Green
      light: "#063f25", // Lighter Green
      dark: "#064127", // Even Darker Green
      contrastText: "#ffffff", // White for contrast
    },
    secondary: {
      main: "#daae6c", // Gold Accent
      contrastText: "#042516", // Dark Green for contrast
    },
    background: {
      default: "#042516", // Default background color
      paper: "#063f25", // Paper background (cards, modals)
    },
    text: {
      primary: "#ffffff", // White text for high contrast
      secondary: "#daae6c", // Gold text
    },
  },
});

export default theme;
