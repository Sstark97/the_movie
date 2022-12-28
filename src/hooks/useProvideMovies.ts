import { useState, useCallback, useEffect } from "react"
import { API_MOST_POPULAR } from "../const"
import type { Response, Movie } from "@customTypes/movies"

const useProvideMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([] as Movie[])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const loadMovies = useCallback(async () => {
        setLoading(true)

        try {
            const response = await fetch(API_MOST_POPULAR)
            const data: Response = await response.json()
            const { results: currentMovies } = data
            
            setMovies(currentMovies)
            setLoading(false)
            setError(false)
        } catch {
            setError(true)
        }
    }, [])

    useEffect(() => {
        loadMovies()
    }, [])

    return {
        movies,
        loading, 
        error
    }
}

export default useProvideMovies
