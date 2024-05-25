import { ImageListItem, ImageListItemBar, IconButton, Grid } from "@mui/material"
import InfoIcon from '@mui/icons-material/Info';

export default function CardMovie({ movie }) {
    //URL PARA BUSCAR CADA IMAGEN
    const imgURL = "http://image.tmdb.org/t/p/original"

    return (
        <Grid item>
            <ImageListItem sx={{ width: "25vh" }}>
                <img
                    srcSet={`${imgURL}${movie.poster_path}`}
                    src={`${imgURL}${movie.poster_path}`}
                    alt={movie.title}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={movie.title}
                    actionIcon={
                        <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${movie.title}`}
                        >
                            <InfoIcon />
                        </IconButton>
                    }
                />
            </ImageListItem>
        </Grid>
    )
}
