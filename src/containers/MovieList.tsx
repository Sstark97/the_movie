import useMovies from "@hooks/useMovies"
import type { AppContextInterface } from "@customTypes/context"
import Loading from "@components/Loading"
import Error from "@components/Error"
import MovieItem from "@components/MovieItem"
import { Movie } from "@customTypes/movies"
import "@styles/containers/MovieList.scss"

const MovieList = () => {
  const { movies, loading, error}: AppContextInterface = useMovies()
  console.log(error)
  
  return (
    <ul className={loading ? "loading" : ""}>
        {error ? <Error /> : null}
        {!loading ? movies.map((movie: Movie) => <MovieItem key={movie.id} movie={movie} /> ) : <Loading />}
    </ul>
  )
}

export default MovieList