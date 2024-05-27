import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useDetailMovie from '../hooks/useDetailMovie'
import { Link } from 'react-router-dom'
//MUI
import { Container, Grid, Card, Typography, List, ListItem } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

export default function DetailMovie() {

  const { idMovie } = useParams()

  const { detailMovie, getDetailMovie } = useDetailMovie()

  //SEPARA UNICAMENTE EL AÑO
  const date = detailMovie?.release_date || ''
  const [year] = date.split('-')

  //URL PARA BUSCAR CADA IMAGEN
  const imgURL = "http://image.tmdb.org/t/p/original"

  useEffect(() => {
    getDetailMovie(idMovie)
  }, [])

  return (
    <>
      <Container disableGutters maxWidth="xl" sx={{ margin: "0", height: "100vh", backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgURL}${detailMovie.backdrop_path})`, backgroundPosition: "center", backgroundSize: "cover", backgroundBlendMode: "darken", display: "flex", justifyContent: "center", alignItems: "center" }}>
        {detailMovie ?
          <Grid columns={{ lg: 2, xs: 1 }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: "35px", display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
            <Grid item xs={1} sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
              <Card sx={{ backgroundColor: "black", width: "50vh", height: "70vh", backgroundImage: `url(${imgURL}${detailMovie.poster_path})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                ♥
              </Card>
            </Grid>
            <Grid item xs={1} sx={{ display: "flex", flexDirection: "column" }}>
              <Link sx={{ textDecoration: "none" }}>
                <Typography variant='p' sx={{ display: "flex", justifyContent: "flex-end", margin: "0vh 12vh", fontFamily: "Montserrat", fontSize: "2vh", textAlign: "right", lineHeight: 1, letterSpacing: '0.5px', color: "#f5d57b", padding: "5px", textShadow: "2px 2px 2px black" }}>
                  <PlayCircleIcon sx={{ margin: "0px 5px", fontSize: "15px" }} /> View trailer
                </Typography>
              </Link>
              <Typography variant="h2" sx={{ margin: "4vh", fontFamily: "Notable", fontSize: "5vh", textAlign: "right", lineHeight: 1, letterSpacing: '0.5px', color: "#E5E0DA", padding: "5px", textShadow: "2px 2px 2px black" }}>
                {detailMovie.title}
                <Typography variant='p' sx={{ margin: "2vh", fontFamily: "Montserrat", fontSize: "3vh", textAlign: "right", lineHeight: 1, letterSpacing: '0.5px', color: "#E5E0DA", padding: "5px", textShadow: "2px 2px 2px black" }}>
                  {year}
                </Typography>
              </Typography>
              <Typography variant="subtitle" sx={{ margin: "4vh", textAlign: "right", color: "#E5E0DA", fontFamily: "Montserrat" }}>
                {detailMovie.overview}
              </Typography>
              <List sx={{ textDecoration: "none", margin: "0vh 4vh", color: "#E5E0DA", fontFamily: "Montserrat" }}>
                {detailMovie?.genres?.map((gender) =>
                  <ListItem key={crypto.randomUUID()}>
                    <AutoAwesomeIcon fontSize='small' sx={{ margin: "0px 10px" }} /> {gender.name}
                  </ListItem>
                )}</List>
            </Grid>
          </Grid>
          : <Typography variant="h2" sx={{ margin: "4vh", fontFamily: "Notable", fontSize: "5vh", textAlign: "right", lineHeight: 1, letterSpacing: '0.5px', color: "red", padding: "5px", textShadow: "2px 2px 2px black" }}>cargando..</Typography>}
      </Container>
    </>
  )
}
