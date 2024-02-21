import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let darkTheme = createTheme({
  typography: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif',
      h1: {
        fontSize: '52px',
        fontWeight: 300
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
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#66b2ff',
          textDecorationColor: '#66b2ff',
          ":hover, :focus": {
            color: "#a3d0ff",
            textDecorationColor: "#a3d0ff",
          }
        }
      }
    }
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#101217',
      contrastText: '#fff'
    },
    background: {
      default: '#101217'
    }
  },
})

darkTheme = responsiveFontSizes(
  darkTheme, 
  {
    breakpoints: ['sm', 'lg'],
    factor: 3
  }
);

export default darkTheme;