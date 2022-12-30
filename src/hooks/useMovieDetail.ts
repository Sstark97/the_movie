import { useEffect } from "react"
import moment from "moment"
import useMovies from "@hooks/useMovies"
import type { AppContextInterface } from "@customTypes/context"
import type { MovieDetailsFormat } from "@customTypes/movie"

const useMovieDetails = (id: number) => {
    const { movie, loading, error, handleChangeMovieId }: AppContextInterface = useMovies()

    useEffect(() => {
      handleChangeMovieId(id)
    }, [])
    // const movie: Movie = movies.find((currentMovie) => currentMovie.id === id) as Movie
    const { release_date } = movie
    const formatDate = moment(release_date).format("D/MM/Y")
    const year = moment(release_date).format("Y")

    const movieFormat: MovieDetailsFormat = { ...movie, formatDate, year}

    return {
        loading,
        error, 
        movie: movieFormat
    }
}

export default useMovieDetails