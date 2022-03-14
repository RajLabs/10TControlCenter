import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      light: '#4962b6',
      main: '#5346A0'
    },
    secondary: {
      light: '#818181',
      main: '#565656',
      dark: '#000'
    },
    error: {
      main: '#E50505'
    },
    info: {
      light: '#F5F8FD',
      main: '#E5EEFF',
      dark: '#D3E3FC'
    },
    success: {
      main: '#50840B'
    },
    warning: {
      main: '#DFD800'
    },
    background: {
      default: '#EFEFEF'
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
    fontSize: 12,
    body1: {
      fontSize: '14px'
    },
    h2: {
      fontSize: '11px',
      color: '#707070'
    },
    body2: {
      fontSize: '12px',
      fontWeight: 600,
      color: '#4A4A4E',
      paddingTop: '8px'
    },
    h5: {
      fontSize: '12px',
      fontWeight: 600,
      padding: '4px'
    },
    h4: {
      fontSize: '13px',
      padding: '4px'
    },
    subtitle1: {
      fontSize: '11px'
    }
  }
});

export default customTheme;
