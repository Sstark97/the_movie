import {  useReducer, useCallback, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { API_MOST_POPULAR, API_MOVIE_DETAIL, TOTAL_PAGES } from "../const"
import { giveMyInitialState, ActionTypes, reducer } from "@context/reducer"
import type { FailResponse, Response } from "@customTypes/movies"
import type { MovieDetails } from "@customTypes/movie"

/**
 * Custom Hook that manage all the Context 
 * @returns movies, movie, page, totalPages,
 * handleChangePage, handleChangeMovieId, 
 * loading and error
 */
const useProvideMovies = () => {
    const [state, dispatch] = useReducer(reducer, giveMyInitialState());
    const { page, movieId } = state

    /**
     * Use location to reset possible Errors
     * when change the path of the app
     */
    const location = useLocation()

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
        dispatch({ type: ActionTypes.LOAD })

        try {
            const response = await fetch(`${API_MOST_POPULAR}&page=${newPage}`)
            const data: Response | FailResponse= await response.json()
            const { results: movies } = data as Response

            // Check if API fail
            comprobeMoviesError(data)
            dispatch({ type: ActionTypes.LOAD_MOVIES, payload: { movies } })
        } catch (e: unknown) {
            dispatch({type: ActionTypes.ERROR, payload: {error: `${e}`}})
        }
    }, [])

    const loadMovie = useCallback(async (id: number) => {
        dispatch({ type: ActionTypes.LOAD })

        try {
            const URI = API_MOVIE_DETAIL.replace("id", id.toString())
            const response = await fetch(URI)
            const movie: MovieDetails | FailResponse = await response.json()

            // Check if API fail
            comprobeMoviesError(movie)
    
            dispatch({ type: ActionTypes.LOAD_MOVIE, payload: { movie: movie as MovieDetails}})
        } catch (e: unknown) {
            dispatch({type: ActionTypes.ERROR, payload: {error: `${e}`}})
        }
    }, [])

    const handleChangeMovieId = (movieId: number) => {
        dispatch({ type: ActionTypes.MOVIE_ID, payload: { movieId }})
    }

    const handleChangePage = (page: number) => {
        dispatch({ type: ActionTypes.PAGE, payload: { page }})
    }

    useEffect(() => {
        dispatch({type: ActionTypes.ERROR, payload: {error: ""}})
    },[location])

    useEffect(() => {
        loadMovies(page)
    }, [page])

    useEffect(() => {
        if(movieId !== 0) {
            loadMovie(movieId)
        }
    }, [movieId])

    return {
        ...state,
        totalPages: TOTAL_PAGES,
        handleChangePage,
        handleChangeMovieId,
    }
}

export default useProvideMovies
