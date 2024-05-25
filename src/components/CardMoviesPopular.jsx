import { useEffect } from "react"
import useMovies from "../hooks/useMovies"
import CardMovie from "./CardMovie"
import { ImageList, ImageListItem, ListSubheader } from "@mui/material"

export default function CardMoviesPopular() {

    const { getMovies, movies } = useMovies()

    useEffect(() => { getMovies("popular") }, [])

    return (
        <ImageList sx={{ width: 600, height: 600 }}>
            <ImageListItem key="Subheader" cols={3}>
                <ListSubheader component="div" sx={{ backgroundColor: "black", color: "#F5D57B", fontFamily: "Montserrat", fontSize:"2.5vh"}}>POPULAR•MOVIES</ListSubheader>
            </ImageListItem>
            {movies ? movies.map((movie) =>
                <CardMovie
                    key={crypto.randomUUID()}
                    movie={movie}
                />
            ) : null}
        </ImageList>
    )
}
