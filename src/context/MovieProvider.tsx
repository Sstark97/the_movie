import { createContext } from "react"
import useProvideMovies from "@hooks/useProvideMovies"
import type { Children } from "@customTypes/globals"
import type { AppContextInterface } from "@customTypes/context"

const MovieContext = createContext<AppContextInterface>({} as AppContextInterface)

const MovieProvider = ({ children }: Children) => {
  const { Provider } = MovieContext
  const { movies, loading, error} = useProvideMovies()

  console.log(movies)


  return (
    <Provider value={{ movies, loading, error }}>{children}</Provider>
  )
}

export {
  MovieContext,
  MovieProvider
}