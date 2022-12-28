import useMovies from "@hooks/useMovies"
import type { AppContextInterface } from "@customTypes/context"
import MovieItem from "@components/MovieItem"
import { Movie } from "@customTypes/movies"
import "@styles/containers/MovieList.scss"

const MovieList = () => {
  const { movies, loading }: AppContextInterface = useMovies()
  
  return (
    <ul>
        {!loading ? movies.map((movie: Movie) => <MovieItem key={movie.id} movie={movie} /> ) : <p>Cargando</p>}
    </ul>
  )
}

export default MovieList