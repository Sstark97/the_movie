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

export type {
    AppContextInterface
}
