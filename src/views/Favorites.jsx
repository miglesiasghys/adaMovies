import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext';
import CardMovie from '../components/CardMovie';
//
import { Container, ImageList, ImageListItem, ListSubheader, Grid } from '@mui/material'

export default function Favorites() {
    const { favorites } = useContext(FavoritesContext)

    return (
        <Container disableGutters maxWidth="xl" sx={{  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <ImageList sx={{ marginTop: "10vh", display: "flex", flexDirection: "column"}}>
                <ImageListItem cols={2}>
                    <ListSubheader component="div" sx={{ backgroundColor: "black", color: "#F5D57B", fontFamily: "Montserrat", fontSize: "2.5vh" }}><Link to={'/home'}>ADA MOVIES</Link> / FAVORITES MOVIES</ListSubheader>
                </ImageListItem>
                <Grid container cols={5} sx={{minHeight: '100vh', width: "100%", display: "flex", justifyContent:"center" }}>
                    {favorites ? favorites.map((favorite) =>
                        <CardMovie
                            key={crypto.randomUUID()}
                            movie={favorite}
                        />
                    ) : null}
                </Grid>
            </ImageList>
        </Container>
    )
}
