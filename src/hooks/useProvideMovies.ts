import { useState, useCallback, useEffect } from "react"
import { API_MOST_POPULAR } from "../const"
import type { FailResponse, Response, Movie } from "@customTypes/movies"

const useProvideMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([] as Movie[])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    /**
     * Function that throw an Error if data is
     * instance of FailResponse
     * @param data 
     */
    const comprobeMoviesError = (data: Response | FailResponse) => {
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
    const loadMovies = useCallback(async () => {
        setLoading(true)

        try {
            // ${API_MOST_POPULAR}&page=${page}
            "https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1"
            // ${API_MOST_POPULAR}&page=${page}
            const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1")
            const data: Response | FailResponse= await response.json()
            const { results: currentMovies } = data as Response

            // Check if API fail
            comprobeMoviesError(data)
            
            setMovies(currentMovies)
            setError("")
        } catch (e: any) {
            setError(`${e}`)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        loadMovies()
    }, [page])

    return {
        movies,
        page,
        loading, 
        error
    }
}

export default useProvideMovies
