import type { Movie } from "@customTypes/movies"

const MovieItem = ({ movie }: {movie: Movie}) => {
  return (
    <li>
        <p>{movie.original_title}</p>
    </li>
  )
}

export default MovieItem