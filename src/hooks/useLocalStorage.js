export default function useLocalStorage() {

    const getLocalStorage = (categoria) => {
        const categoriaLS = JSON.parse(localStorage.getItem(categoria)) || [];
        return categoriaLS
    }

    const updateLocalStorage = (categoria, datos) => {
        localStorage.setItem(categoria, JSON.stringify(datos))
    }

    return {
        getLocalStorage,
        updateLocalStorage
    }
}
