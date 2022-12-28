import type { Movie } from "./movies"

interface AppContextInterface {
    movies: Movie[],
    page: number,
    loading: boolean, 
    error: string
}

export type {
    AppContextInterface
}
