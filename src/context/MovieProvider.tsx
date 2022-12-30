import { createContext } from "react"
import useProvideMovies from "@hooks/useProvideMovies"
import type { Children } from "@customTypes/globals"
import type { AppContextInterface } from "@customTypes/context"

const MovieContext = createContext<AppContextInterface>({} as AppContextInterface)

const MovieProvider = ({ children }: Children) => {
  const { Provider } = MovieContext
  const { movies, movie, page, totalPages, handleChangePage, handleChangeMovieId, loading, error } = useProvideMovies()

  return (
    <Provider
      value={{
        movies,
        movie,
        page,
        totalPages,
        handleChangePage,
        handleChangeMovieId,
        loading,
        error,
      }}
    >
      {children}
    </Provider>
  )
}

export { MovieContext, MovieProvider }
