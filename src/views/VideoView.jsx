import { useParams } from "react-router-dom"
import useDetailMovie from "../hooks/useDetailMovie"
import { useEffect } from "react"
import YouTube from 'react-youtube';

import { Container, Typography, Box } from "@mui/material"

export default function VideoView() {

    const { idMovie } = useParams()

    const { getMovieTrailer, movieTrailer } = useDetailMovie()

    useEffect(() => {
        setTimeout(() => { getMovieTrailer(idMovie) }, 2000)
    }, [])

    //youtube
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };

    const trailer = movieTrailer.find(
        (movie) => movie.type === "Trailer"
    );
    console.log(trailer)

    return (
        <Container disableGutters maxWidth="xl" sx={{ marginTop: "2vh", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ margin: "3vh" }}>
                
                <Typography sx={{ color: "white" }}> {trailer?.name} </Typography>
                <YouTube videoId={trailer?.key} opts={opts} title={trailer?.name} />
            </Box>
        </Container>
    )
}
