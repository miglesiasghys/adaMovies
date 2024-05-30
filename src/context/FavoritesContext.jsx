import { createContext, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const FavoritesContext = createContext()

const FavoritesContextProvider = ({ children }) => {

    const { getLocalStorage, updateLocalStorage } = useLocalStorage()

    const [favorites, setFavorites] = useState([])

    //MONTAJE 
    useEffect(() => {
        setFavorites(getLocalStorage("favorites"))
    }, [])

    //ACTUALIZACION
    useEffect(() => {
        setTimeout(() => { updateLocalStorage("favorites", favorites) }, 2000)
    }, [favorites])

    const addFavorites = (movie) => {
        console.log(movie)
        setFavorites([...favorites, movie])
    }

    const removeFavorites = (id) => {
        const newArray = favorites.filter((favorite) => favorite.id !== id)
        console.log(id)
        setFavorites(newArray)
    }

    const isFavorite = (id) => {
        const exist = favorites?.some((movie) => movie.id === id);
        return exist
    }

    const totalFavorites = () => {
        return favorites.length
    }

    const data = {
        addFavorites,
        favorites,
        removeFavorites,
        isFavorite,
        totalFavorites
    }

    return <FavoritesContext.Provider value={data}>
        {children}
    </FavoritesContext.Provider>
}

export default FavoritesContextProvider