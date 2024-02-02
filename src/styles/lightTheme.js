import { createTheme } from '@mui/material/styles'

const lightTheme = createTheme({
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

export default lightTheme;