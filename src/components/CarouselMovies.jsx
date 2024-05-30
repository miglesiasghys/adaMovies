import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useMovies from "../hooks/useMovies"
import { useEffect } from "react";
import { Link } from "react-router-dom";
//MUI
import { Container, Typography, Grid, Tooltip } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function CarouselMovies() {

  //URL PARA BUSCAR CADA IMAGEN
  const imgURL = "http://image.tmdb.org/t/p/original"

  const { getMovies, movies } = useMovies()

  useEffect(() => { getMovies("now_playing") }, [])

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dotsClass: "slick-dots custom-dots"
  };

  return (
    <Slider {...settings} autoplay  >
      {movies ? movies?.map((movie) =>
        <Container key={crypto.randomUUID()} disableGutters maxWidth="xl" sx={{ margin: "0", height: "95vh", backgroundImage: `url(${imgURL}${movie.backdrop_path})`, backgroundPosition: "center", backgroundSize: "cover" }}>
          <Grid container columns={{ lg: 2, xs: 1 }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Grid item sx={{ height: "100%", width: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Tooltip title="See more">
                <Link to={`/detail/${movie.id}`}>
                  <AddCircleOutlineIcon fontSize="small" sx={{ color: "#E5E0DA", fontSize: "7vh" }} />
                </Link>
              </Tooltip>
            </Grid>
            <Grid item sx={{ height: "80%", width: "50%", padding: "20px", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center" }} >
              <Typography variant="h2" sx={{ margin: "2px", fontFamily: "Notable", fontSize: "9vh", textAlign: "right", lineHeight: 1, letterSpacing: '0.5px', color: "#E5E0DA", padding: "5px", textShadow: "2px 2px 2px black" }}>
                {movie.title}
              </Typography>
              <Typography variant="subtitle" sx={{ marginTop: "20px", textAlign: "right", color: "#E5E0DA", fontFamily: "Montserrat" }}>
                {movie.overview}
              </Typography>
            </Grid>
          </Grid>
        </Container>) : null}
    </Slider>
  )
}
