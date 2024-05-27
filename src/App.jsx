import { CssBaseline, Container } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import DetailMovie from './views/DetailMovie'
import Header from './components/static/Header'

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Container disableGutters maxWidth="xl" sx={{ display: 'flex', flexDirection: "column", justifyContent: "center", backgroundColor: "black" }}>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail/:idMovie' element={<DetailMovie />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
