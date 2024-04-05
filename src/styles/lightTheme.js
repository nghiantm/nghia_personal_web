import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let lightTheme = createTheme({
  typography: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif',
      h1: {
        fontSize: '3.25rem',
        fontWeight: 300,
      },
      h2: {
        fontSize: '1.375rem',
        fontWeight: 600,
      },
      h3: {
        fontSize: '1.25rem', 
        fontWeight: 500
      },
      h4: {
        fontSize: '1.25rem',
        fontWeight: 400
      },  
      body1: {
        fontSize: '1rem',
        fontWeight: 400
      },
      caption: {
        fontSize: '0.875rem',
        fontStyle: 'italic',
        lineHeight: 0
      }
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#0066cc",
          textDecorationColor: "#0066cc",
          ":hover, :focus": {
            color: "#003d7a",
            textDecorationColor: "#003d7a",
          }
        }
      }
    }
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#fafafa',
      contrastText: '#000'
    },
    background: {
      default: '#fafafa'
    }
  },
})

lightTheme = responsiveFontSizes(
  lightTheme, 
  {
    breakpoints: ['sm', 'lg'],
    factor: 3
  }
);

export default lightTheme;