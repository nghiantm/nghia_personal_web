// MUI
import { Container, CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material'
import lightTheme from './styles/lightTheme.js'
import darkTheme from './styles/darkTheme.js'
// routes
import { Route, Routes } from 'react-router'
import Blog from './routes/Blog'
import Project from './routes/Project'
import Home from './routes/Home'
import NavBar from './components/NavBar/NavBar'
import { useSelector } from 'react-redux'

const App = () => {
  const mode = useSelector((theme) => theme.theme);
  const theme = mode === 'light' ? lightTheme : darkTheme;

  const styles = {
    box: {
      px: '40px',
      [theme.breakpoints.between('md', 'lg')]: {
        px: '120px'
      },
    },
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container disableGutters maxWidth={'lg'} sx={styles.box}> 
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/blog' element={<Blog />}/>
            <Route path='/project' element={<Project />}/>
          </Routes>
      </Container>
    </ThemeProvider>
  )
}

export default App;
