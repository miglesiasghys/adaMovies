import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
//MUI
import { ImageListItem, ImageListItemBar, Grid, Tooltip, Box, IconButton } from "@mui/material"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function CardMovieHome({ movie }) {
  //URL PARA BUSCAR CADA IMAGEN
  const imgURL = "http://image.tmdb.org/t/p/original"

  //Context
  const { addFavorites, removeFavorites, isFavorite } = useContext(FavoritesContext)

  return (
    <Grid item>
      <ImageListItem sx={{ maxWidth: "27vh" }}>
        <img
          srcSet={`${imgURL}${movie.poster_path}`}
          src={`${imgURL}${movie.poster_path}`}
          alt={movie.title}
          loading="lazy"
        />
        <ImageListItemBar
          title={movie.title}
          actionIcon={
            <Box sx={{ display: "flex" }}>
              <Tooltip title="See more"
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${movie.title}`}
              >
                <Link to={`/detail/${movie.id}`}>
                  <IconButton>
                    <AddCircleOutlineIcon sx={{ color: "#F5D57B" }} />
                  </IconButton>
                </Link>
              </Tooltip>
              <Tooltip title="Add favorites"
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${movie.title}`}
              >
                {isFavorite(movie.id) ? (
                  <IconButton onClick={() => removeFavorites(movie.id)}>
                    <FavoriteIcon sx={{ color: "#F5D57B" }} />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => addFavorites(movie)}>
                    <FavoriteBorderIcon sx={{ color: "#F5D57B" }} />
                  </IconButton>
                )}
              </Tooltip>
            </Box>
          } />
      </ImageListItem>
    </Grid>
  )
}
