import type { Movie } from "./movies"

interface AppContextInterface {
    movies: Movie[],
    page: number,
    totalPages: number,
    handleChangePage(newPage: number): void,
    loading: boolean, 
    error: string
}

export type {
    AppContextInterface
}
