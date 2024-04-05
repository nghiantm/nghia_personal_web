// styles
import { Container, CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material'
import darkTheme from './styles/darkTheme.js'
import lightTheme from './styles/lightTheme.js'
import "./styles/index.css"
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
  useEffect(() => {
    dispatch(setTheme(localStorage.getItem('theme')));
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
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/project' element={<Project />}/>
      </Routes>
    </ThemeProvider>
  )
}

export default App;
