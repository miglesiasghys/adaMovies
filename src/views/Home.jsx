import CardMoviesPopular from '../components/CardMoviesPopular'
import CardMoviesTopRated from '../components/CardMoviesTopRated'
import { Grid } from '@mui/material'
import CarrouselMovies from '../components/CarouselMovies'

export default function Home() {
  return (
    <>
      <CarrouselMovies />
      <Grid container columns={{ lg: 2, xs: 1 }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: "35px", display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center" }}>
        <Grid item>
          <CardMoviesPopular />
        </Grid>
        <Grid item>
          <CardMoviesTopRated />
        </Grid>
      </Grid>
    </>
  )
}
