import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useMovies from "../hooks/useMovies"
import { useEffect, useState } from "react";
//MUI
import { Container, Typography, Grid, IconButton, Menu, MenuItem, Divider } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InfoIcon from '@mui/icons-material/Info';

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

  //FUNCION DE MUI PARA EL MENU DESPLEGABLE 
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <Slider {...settings} autoplay >
      {movies ? movies.map((movie) =>
        <Container disableGutters maxWidth="xl" sx={{ margin: "0", height: "95vh", backgroundImage: `url(${imgURL}${movie.backdrop_path})`, backgroundPosition: "center", backgroundSize: "cover" }}>
          <Grid container columns={{ lg: 2, xs: 1 }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Grid item sx={{ height: "100%", width: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <IconButton onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}>
                <AddCircleOutlineIcon fontSize="small" sx={{ color: "#E5E0DA", fontSize: "7vh" }} />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    backgroundColor: "#E5E0DA",
                    overflow: 'visible',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&::before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: '#E5E0DA',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleClose}>
                  <InfoIcon sx={{ marginRight: "10px" }} />See more
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <FavoriteBorderIcon sx={{ marginRight: "10px" }} />Add favorites
                </MenuItem>
              </Menu>
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
