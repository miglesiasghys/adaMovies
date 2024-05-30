import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import useDetailMovie from '../hooks/useDetailMovie'
import { Link } from 'react-router-dom'
import { FavoritesContext } from "../context/FavoritesContext";
//MUI
import { Container, Grid, Card, Typography, List, ListItem, Tooltip, IconButton, Box } from '@mui/material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

export default function DetailMovie() {

  const { idMovie } = useParams()

  const { detailMovie, getDetailMovie} = useDetailMovie()

  //SEPARA UNICAMENTE EL AÑO
  const date = detailMovie?.release_date || ''
  const [year] = date.split('-')

  //URL PARA BUSCAR CADA IMAGEN
  const imgURL = "http://image.tmdb.org/t/p/original"

  useEffect(() => {
    getDetailMovie(idMovie)
  }, [])

  //Context
  const { addFavorites, removeFavorites, isFavorite } = useContext(FavoritesContext)

  return (
    <>
      <Container disableGutters maxWidth="xl" sx={{ margin: "0", minHeight: "100vh", backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgURL}${detailMovie.backdrop_path})`, backgroundPosition: "center", backgroundSize: "cover", backgroundBlendMode: "darken", display: "flex", justifyContent: "center", alignItems: "center" }}>
        {detailMovie ?
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ width: "100%", marginTop: "70px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Grid item xs={11} sm={12} md={6}>
              <Box sx={{ width: "100%", height: 600, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Card sx={{ backgroundColor: "black", width: "50vh", height: "70vh", backgroundImage: `url(${imgURL}${detailMovie.poster_path})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                  <Tooltip title="Add favorites">
                    {isFavorite(detailMovie.id) ? (
                      <IconButton onClick={() => removeFavorites(detailMovie.id)}>
                        <FavoriteIcon sx={{ color: "#F5D57B" }} />
                      </IconButton>
                    ) : (
                      <IconButton onClick={() => addFavorites(detailMovie)}>
                        <FavoriteBorderIcon sx={{ color: "#F5D57B" }} />
                      </IconButton>
                    )}
                  </Tooltip>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={11} sm={12} md={6}>
              <Box sx={{ width: "100%", minHeight: 600, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Typography variant="h2" sx={{ margin: "2vh 4vh", fontFamily: "Notable", fontSize: "5vh", textAlign: "right", lineHeight: 1, letterSpacing: '0.5px', color: "#E5E0DA", padding: "5px", textShadow: "2px 2px 2px black" }}>
                  {detailMovie.title}
                  <Typography variant='p' sx={{ margin: "2vh", fontFamily: "Montserrat", fontSize: "3vh", textAlign: "right", lineHeight: 1, letterSpacing: '0.5px', color: "#E5E0DA", padding: "5px", textShadow: "2px 2px 2px black" }}>
                    {year}
                  </Typography>
                </Typography>
                <Link to={`/video/${detailMovie.id}`} sx={{ textDecoration: "none" }}>
                  <Typography variant='p' sx={{ display: "flex", justifyContent: "flex-end", margin: "0vh 12vh", fontFamily: "Montserrat", fontSize: "2.5vh", textAlign: "right", lineHeight: 1, letterSpacing: '0.5px', color: "#F5D57B", padding: "5px" }}>
                    <PlayCircleIcon sx={{ margin: "0px 5px", fontSize: "15px" }} /> View trailer
                  </Typography>
                </Link>
                <Typography variant="subtitle" sx={{ margin: "4vh", textAlign: "right", color: "#E5E0DA", fontFamily: "Montserrat" }}>
                  {detailMovie.overview}
                </Typography>
                <List sx={{ textDecoration: "none", margin: "0vh 4vh", color: "#E5E0DA", fontFamily: "Montserrat" }}>
                  {detailMovie?.genres?.map((gender) =>
                    <ListItem key={crypto.randomUUID()}>
                      <LocalMoviesIcon fontSize='medium' sx={{ margin: "0px 10px", color: "#E5E0DA" }} /> {gender.name}
                    </ListItem>
                  )}</List>
              </Box>
            </Grid>
          </Grid>
          : null}
      </Container>
    </>
  )
}
