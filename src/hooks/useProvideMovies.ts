import { useState, useCallback, useEffect } from "react"
import { API_MOST_POPULAR, TOTAL_PAGES } from "../const"
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
    const loadMovies = useCallback(async (newPage: number) => {
        setLoading(true)

        try {
            const response = await fetch(`${API_MOST_POPULAR}&page=${newPage}`)
            const data: Response | FailResponse= await response.json()
            const { results: currentMovies } = data as Response

            // Check if API fail
            comprobeMoviesError(data)
            
            setMovies(currentMovies)
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
        page,
        totalPages: TOTAL_PAGES,
        handleChangePage,
        loading, 
        error
    }
}

export default useProvideMovies
