import type { Movie } from "./movies"

interface AppContextInterface {
    movies: Movie[],
    page: number,
    totalPages: number,
    loading: boolean, 
    error: string
}

export type {
    AppContextInterface
}
