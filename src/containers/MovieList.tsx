import MovieItem from "@components/MovieItem"
import { Movie } from "@customTypes/movies"

const MovieList = ({ movies }: {movies: Movie[]}) => {
  return (
    <ul>
        {movies.map((movie: Movie) => <MovieItem key={movie.id} movie={movie} />)}
    </ul>
  )
}

export default MovieList