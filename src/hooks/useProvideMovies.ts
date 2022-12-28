import { useState, useCallback, useEffect } from "react"
import { API_MOST_POPULAR } from "../const"
import type { Response, Movie } from "@customTypes/movies"

const useProvideMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([] as Movie[])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const loadMovies = useCallback(async () => {
        setLoading(true)

        try {
            const response = await fetch(`${API_MOST_POPULAR}&page=${page}`)
            const data: Response = await response.json()
            const { results: currentMovies } = data
            
            setMovies(currentMovies)
            setError(false)
        } catch {
            setError(true)
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
