import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const customTheme = createTheme({
  palette: {
    primary: {
      main: purple[500]
    },
    secondary: {
      main: green[500]
    }
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  typography: {
    htmlFontSize: 14, // Fonts & HTML body MUST be set in the static HTML
    fontFamily: 'sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      fontSize: '2.857rem',
      lineHeight: '3.5rem',
      letterSpacing: '-0.01562em',
      color: purple[500]
    }
  }
});

export default customTheme;
