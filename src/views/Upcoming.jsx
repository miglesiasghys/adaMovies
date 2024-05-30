import { useEffect } from 'react'
import CardMovie from '../components/CardMovie'
import useMovies from '../hooks/useMovies'
import { Link } from 'react-router-dom'
//MUI
import { ImageList, ImageListItem, ListSubheader, Container, Grid, Stack, Pagination } from '@mui/material'

export default function Upcoming() {

    const { getMovies, movies, page, totalPages, handleChange } = useMovies()

    useEffect(() => { getMovies("upcoming") }, [page])

    return (
        <Container disableGutters maxWidth="xl" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} >
            <ImageList sx={{ marginTop: "10vh", display: "flex", flexDirection: "column" }}>
                <ImageListItem cols={2}>
                    <ListSubheader component="div" sx={{ backgroundColor: "black", color: "#F5D57B", fontFamily: "Montserrat", fontSize: "2.5vh" }}><Link to={'/home'}>ADA MOVIES</Link> / UPCOMING MOVIES</ListSubheader>
                </ImageListItem>
                <Grid container cols={5} sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {movies ? movies.map((movie) =>
                        <CardMovie
                            key={crypto.randomUUID()}
                            movie={movie}
                        />
                    ) : null}
                </Grid>
            </ImageList>
            <Stack spacing={2} >
                <Pagination variant='outlined' color='standard' sx={{
                    '& .MuiPaginationItem-page': {
                        color: 'black',
                        backgroundColor:"#F5D57B",
                        '&:hover': {
                            backgroundColor: '#E55630',
                            color:"#F5D57B",
                        },
                        '&.Mui-selected': {
                            color: '#F5D57B',
                            backgroundColor: '#E55630'},
                    }, '& .MuiPaginationItem-ellipsis': {
                        color: '#F5D57B'}
                    , p: "20px"
                }} count={totalPages} page={page} onChange={handleChange} />
            </Stack>
        </Container>
    )
}
