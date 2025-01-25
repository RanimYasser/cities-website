// src/theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Primary color (blue)
      light: '#63a4ff', // Optional: Lighter shade
      dark: '#004ba0', // Optional: Darker shade
      contrastText: '#ffffff', // Text color on primary
    },
    secondary: {
      main: '#dc004e', // Secondary color (pink)
      light: '#ff5c8d', // Optional: Lighter shade
      dark: '#9a0036', // Optional: Darker shade
      contrastText: '#ffffff', // Text color on secondary
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#4caf50',
    },
    background: {
      default: '#f5f5f5', // Background color
      paper: '#ffffff', // Surface color
    },
  },
});

export default theme;
