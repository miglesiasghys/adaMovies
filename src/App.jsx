import { CssBaseline, Container } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FavoritesContextProvider from './context/FavoritesContext'
import Home from './views/Home'
import DetailMovie from './views/DetailMovie'
import Header from './components/static/Header'
import Upcoming from './views/Upcoming'
import Popular from './views/Popular'
import Favorites from './views/Favorites'
import SearchMovie from './views/SearchMovie'
import VideoView from './views/VideoView'
import Footer from './components/static/Footer'

function App() {
  return (
    <>
      <FavoritesContextProvider>
        <CssBaseline />
        <BrowserRouter>
          <Container disableGutters maxWidth="xl" sx={{ display: 'flex', flexDirection: "column", justifyContent: "center", backgroundColor: "black" }}>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/detail/:idMovie' element={<DetailMovie />} />
              <Route path='/upcoming' element={<Upcoming />} />
              <Route path='/popular' element={<Popular />} />
              <Route path='/search' element={<SearchMovie />} />
              <Route path='/search/:keyMovie' element={<SearchMovie />} />
              <Route path='/favorites' element={<Favorites />} />
              <Route path='/video/:idMovie' element={<VideoView />} />
            </Routes>
            <Footer />
          </Container>
        </BrowserRouter>
      </FavoritesContextProvider>
    </>
  )
}

export default App
