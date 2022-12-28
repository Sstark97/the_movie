import type { Movie } from "./movies"

interface AppContextInterface {
    movies: Movie[],
    loading: boolean, 
    error: boolean
}

export type {
    AppContextInterface
}
