import axios from 'axios';
import { useState } from 'react';

export default function useDetailMovie() {
  const apiURL = "https://api.themoviedb.org/3"
  const apiKey = "9d5915effba963e63144af4301d96aca"

  const [detailMovie, setDetailMovie] = useState({})
  const [movieTrailer, setMovieTrailer] = useState([])

  //LLAMADA A LA API PARA TRAER EL DETALLE DE CADA PELICULA X ID
  async function getDetailMovie(idMovie) {
    try {
      const { data } = await axios(
        `${apiURL}/movie/${idMovie}`, {
        params: {
          api_key: apiKey,
        }
      }
      )
      setTimeout(() => {
        setDetailMovie(data);
      }, 2000);
    } catch (error) {
      console.log(error)
    }
  }

//
  async function getMovieTrailer(idMovie) {
    try {
      const { data } = await axios(
        `${apiURL}/movie/${idMovie}/videos`, {
        params: {
          api_key: apiKey,
        }
      }
      )
   
    setMovieTrailer(data.results);
      
    } catch (error) {
      console.log(error)
    }
}

  return {
    getDetailMovie,
    detailMovie, 
    getMovieTrailer, 
    movieTrailer
  }
}