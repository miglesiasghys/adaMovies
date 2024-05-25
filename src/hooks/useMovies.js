import axios from 'axios';
import { useState } from 'react';

export default function useMovies() {
    const apiURL = "https://api.themoviedb.org/3"
    const apiKey = "9d5915effba963e63144af4301d96aca"
//    const imgURL = "http://image.tmdb.org/t/p/original"

    const [movies, setMovies] = useState([])

    //LLAMADA A LA API PARA TRAER LAS PELICULAS SEGUN EL RANKING: POPULARES O PUNTUADAS
    async function getMovies (ranking) {
        try {
            const {data} = await axios(
                `${apiURL}/movie/${ranking}`, {
                    params: {
                        api_key: apiKey,
                    }
                }
            )
            setMovies(data.results)
        } catch (error) {
            console.log(error)
        }
    }
    return{
        getMovies, 
        movies
    }
}
