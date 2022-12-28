import { useContext } from "react"
import { MovieContext } from "@context/MovieProvider"

const useMovies = () => {
    return useContext(MovieContext)
}

export default useMovies