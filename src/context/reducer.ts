import type { AppState, AppAction, AppReducerObject } from "@customTypes/context"
import type { MovieDetails } from "@customTypes/movie"
import { ActionTypes } from "../const"
import { Movie } from "@customTypes/movies"

const giveMyInitialState = (): AppState => ({
  movies: [],
  movie: {} as MovieDetails,
  movieId: 0,
  page: 1,
  loading: true,
  error: "",
})

const reducerObject: AppReducerObject = {
  [ActionTypes.ERROR]: (state: AppState, action: AppAction): AppState => ({
    ...state,
    error: action.payload?.error as string,
  }),

  [ActionTypes.LOAD]: (state: AppState): AppState => ({
    ...state,
    loading: true,
  }),

  [ActionTypes.LOAD_MOVIES]: (state: AppState, action: AppAction): AppState => ({
    ...state,
    movies: action.payload?.movies as Movie[],
    loading: false,
  }),

  [ActionTypes.LOAD_MOVIE]: (state: AppState, action: AppAction): AppState => ({
    ...state,
    movie: action.payload?.movie as MovieDetails,
    loading: false,
  }),

  [ActionTypes.PAGE]: (state: AppState, action: AppAction): AppState => ({
    ...state,
    page: action.payload?.page as number,
  }),

  [ActionTypes.MOVIE_ID]: (state: AppState, action: AppAction): AppState => ({
    ...state,
    movieId: action.payload?.movieId as number,
  }),
}

const reducer = (state: AppState, action: AppAction): AppState => reducerObject[action.type](state, action) ?? state

export { 
  giveMyInitialState, 
  reducer 
}
