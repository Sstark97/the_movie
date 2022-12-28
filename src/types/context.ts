import type { Movie } from "./movies"

interface AppContextInterface {
    movies: Movie[],
    page: number,
    loading: boolean, 
    error: boolean
}

export type {
    AppContextInterface
}
