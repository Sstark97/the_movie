import Loading from "@components/Loading"
import Error from "@components/Error"
import MovieItem from "@components/MovieItem"
import useMovies from "@hooks/useMovies"
import type { AppContextInterface } from "@customTypes/context"
import type { Movie } from "@customTypes/movies"
import "@styles/containers/MovieList.scss"

const MovieList = () => {
  const { movies, loading, error }: AppContextInterface = useMovies()
  const className = error ? "not_movies" : ""

  return (
    <>
      {!error ? <h1>Most Popular Movies</h1> : null}
      <ul className={`movie_list ${className}`}>
        {error ? <Error /> : null}
        {!loading ? movies.map((movie: Movie) => <MovieItem key={movie.id} movie={movie} />) : <Loading />}
      </ul>
    </>
  )
}

export default MovieList
