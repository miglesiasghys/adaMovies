import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useSearchMovie from '../hooks/useSearchMovie'
import CardMovie from '../components/CardMovie'
//MUI
import { ImageList, ImageListItem, ListSubheader, Grid, Paper, Container, InputBase, IconButton, Stack, Pagination } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export default function SearchMovie() {

  const { getSearchMovies, movies, page, totalPages, handleChange } = useSearchMovie()

  const { keyMovie } = useParams()

  const navigate = useNavigate()

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    navigate(`/search/${event.target.value}`)
  };

  const searchMovies = (e) => {
    e.preventDefault();
    getSearchMovies(keyMovie);
  };

  useEffect(() => { getSearchMovies(keyMovie) }, [keyMovie, page])

  return (
    <Container disableGutters maxWidth="xl" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <ImageList sx={{ marginTop: "10vh", display: "flex", flexDirection: "column" }}>
        <ImageListItem cols={2}>
          <ListSubheader component="div" sx={{ backgroundColor: "black", color: "#F5D57B", fontFamily: "Montserrat", fontSize: "2.5vh" }}><Link to={'/home'}>ADA MOVIES</Link> / SEARCH</ListSubheader>
        </ImageListItem>
        <Paper
          component="form"
          sx={{ margin: "1vh 5vh", p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          onSubmit={searchMovies}>
          <InputBase
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={handleInputChange}
            sx={{ ml: 1, flex: 1 }}
            inputProps={{ 'aria-label': 'Search' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <Grid container cols={5} sx={{ minHeight: '100vh', width: "100%", display: "flex", justifyContent: "center" }}>
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
            backgroundColor: "#F5D57B",
            '&:hover': {
              backgroundColor: '#E55630',
              color: "#F5D57B",
            },
            '&.Mui-selected': {
              color: '#F5D57B',
              backgroundColor: '#E55630'
            },
          }, '& .MuiPaginationItem-ellipsis': {
            color: '#F5D57B'
          }
          , p: "20px"
        }} count={totalPages} page={page} onChange={handleChange} />
      </Stack>
    </Container>
  )
}
