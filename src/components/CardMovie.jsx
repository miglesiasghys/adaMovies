import { Link } from "react-router-dom";
//MUI
import { ImageListItem, ImageListItemBar, Grid, Tooltip} from "@mui/material"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

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
                        <Tooltip title="See more"
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${movie.title}`}
                        >
                            <Link to={`/detail/${movie.id}`}>
                                <AddCircleOutlineIcon sx={{color:"#F5D57B"}}/>
                            </Link>
                        </Tooltip>
                    }
                />
            </ImageListItem>
        </Grid>
    )
}
