import type { Movie } from "./movies"
import type { MovieDetails } from "./movie"

interface AppContextInterface {
    movies: Movie[],
    movie: MovieDetails,
    page: number,
    totalPages: number,
    handleChangePage(newPage: number): void,
    handleChangeMovieId(id: number): void,
    loading: boolean, 
    error: string
}

interface AppState extends Pick<AppContextInterface,"movies" | "movie" | "page" | "loading" | "error">{
    movieId: number
}

type AppPayload = Partial<Pick<AppState, "movies" | "movie" | "page" | "loading" | "error" | "movieId">>
interface AppAction {
    type: string,
    payload?: AppPayload
};
interface AppReducerObject {
    [key: string]: (state: AppState, action: AppAction) => AppState,
}

export type {
    AppContextInterface,
    AppState,
    AppAction,
    AppReducerObject
}
