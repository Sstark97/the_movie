import useMovies from "@hooks/useMovies"
import type { AppContextInterface } from "@customTypes/context"
import Loading from "@components/Loading"
import MovieItem from "@components/MovieItem"
import { Movie } from "@customTypes/movies"
import "@styles/containers/MovieList.scss"

const MovieList = () => {
  const { movies, loading }: AppContextInterface = useMovies()
  
  return (
    <ul className={loading ? "loading" : ""}>
        {!loading ? movies.map((movie: Movie) => <MovieItem key={movie.id} movie={movie} /> ) : <Loading />}
    </ul>
  )
}

export default MovieList