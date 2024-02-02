//import './App.css'
import { Route, Routes } from 'react-router'
import Home from './routes/Home'
import NavBar from './components/NavBar/NavBar'
import { Box, Container, CssBaseline, useTheme } from '@mui/material'

const App = () => {
  const theme = useTheme();

  const styles = {
    box: {
      px: '40px',
      [theme.breakpoints.between('md', 'lg')]: {
        px: '120px'
      }
    }
  }

  return (
    <>
      <CssBaseline />
      <Container disableGutters maxWidth={'lg'} sx={styles.box}> 
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
      </Container>
    </>
  )
}

export default App;
