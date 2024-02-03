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
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setTheme } from './redux/slices/themeSlice.js'

const App = () => {
  const dispatch = useDispatch();

  // init theme to previous selected
  /*
    NEED FIXING!!!!!!!
    This is my attempt to limit the flashbang. 
    Now instead of light then immidiately dark, it stops at light a bit.
  */
  useEffect(() => {
    const delay = 400;

    const timerId = setTimeout(() => {
      dispatch(setTheme(localStorage.getItem('theme')));
    }, delay);

    // Clean up the timer to avoid memory leaks
    return () => clearTimeout(timerId);
  }, [])  

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
