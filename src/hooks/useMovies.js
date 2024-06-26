import axios from 'axios';
import { useState } from 'react';

export default function useMovies() {
  const apiURL = "https://api.themoviedb.org/3"
  const apiKey = "9d5915effba963e63144af4301d96aca"

  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  //LLAMADA A LA API PARA TRAER LAS PELICULAS SEGUN EL RANKING: POPULARES O PUNTUADAS
  async function getMovies(ranking) {
    try {
      const { data } = await axios(
        `${apiURL}/movie/${ranking}?page=${page}`, {
        params: {
          api_key: apiKey,
        }
      }
      )
      setTimeout(() => {
        setMovies(data.results);
        setTotalPages(data.total_pages)
      }, 1000);
    } catch (error) {
      console.log(error)
    }
  }

  //CAMBIAR DE PAGINA
  const handleChange = (event, value) => {
    setPage(value);
  };

  return {
    getMovies,
    movies,
    totalPages,
    page,
    handleChange
  }
}
