import { useState, useCallback, useEffect } from "react"
import { API_MOST_POPULAR, API_MOVIE_DETAIL, TOTAL_PAGES } from "../const"
import type { FailResponse, Response, Movie } from "@customTypes/movies"
import type { MovieDetails } from "@customTypes/movie"

const useProvideMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([] as Movie[])
    const [movie, setMovie] = useState<MovieDetails>({} as MovieDetails)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    /**
     * Function that throw an Error if data is
     * instance of FailResponse
     * @param data 
     */
    const comprobeMoviesError = (data: Response | MovieDetails | FailResponse) => {
        if((data as FailResponse).status_code) {
            const dataError = data as FailResponse
            const { status_message } = dataError

            throw new Error(status_message)
        }
    }

    /**
     * Function that load Movies from the API
     * and Check if the API throw an Error
     */
    const loadMovies = useCallback(async (newPage: number) => {
        setLoading(true)

        try {
            const response = await fetch(`${API_MOST_POPULAR}&page=${newPage}`)
            const data: Response | FailResponse= await response.json()
            const { results: currentMovies } = data as Response

            // Check if API fail
            comprobeMoviesError(data)

            console.log(movies)
            
            setMovies(currentMovies)
            setError("")
        } catch (e: unknown) {
            setError(`${e}`)
        } finally {
            setLoading(false)
        }
    }, [])

    const loadMovie = useCallback(async (id: string) => {
        setLoading(true)

        try {
            const URI = API_MOVIE_DETAIL.replace("id", id)
            const response = await fetch(URI)
            const currentMovie: MovieDetails | FailResponse = await response.json()

            // Check if API fail
            comprobeMoviesError(currentMovie)

            console.log(movie)
            
            setMovie(currentMovie as MovieDetails)
            setError("")
        } catch (e: unknown) {
            setError(`${e}`)
        } finally {
            setLoading(false)
        }
    }, [])

    const handleChangePage = (newPage: number) => {
        setPage(newPage)
    }

    useEffect(() => {
        loadMovies(page)
    }, [page])

    return {
        movies,
        movie,
        page,
        totalPages: TOTAL_PAGES,
        handleChangePage,
        loading, 
        error
    }
}

export default useProvideMovies
