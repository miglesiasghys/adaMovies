import axios from 'axios';
import { useState } from 'react';

export default function useSearchMovies() {
  const apiURL = "https://api.themoviedb.org/3"
  const apiKey = "9d5915effba963e63144af4301d96aca"

  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  //LLAMADA A LA API PARA BUSCADOR
  async function getSearchMovies(value) {
    try {
      const { data } = await axios(
        `${apiURL}/search/movie?query=${value}&page=${page}`, {
        params: {
          api_key: apiKey,
        }
      }
      )
      setMovies(data.results);
      setTotalPages(data.total_pages)
    } catch (error) {
      console.log(error)
    }
  }

  //CAMBIAR DE PAGINA
  const handleChange = (event, value) => {
    setPage(value);
  };

  return {
    getSearchMovies,
    movies,
    page,
    totalPages,
    handleChange
  }
}
