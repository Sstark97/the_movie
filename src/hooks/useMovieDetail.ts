import { useEffect } from "react"
import moment from "moment"
import useMovies from "@hooks/useMovies"
import type { AppContextInterface } from "@customTypes/context"
import type { MovieDetailsFormat } from "@customTypes/movie"

/**
 * Custom Hook that allow to change de Movie in Context
 * that depends of the id passed by params
 * @param id 
 * @returns movieFormated, loading and error
 */
const useMovieDetails = (id: number) => {
    const { movie, loading, error, handleChangeMovieId }: AppContextInterface = useMovies()

    useEffect(() => {
      handleChangeMovieId(id)
    }, [])

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