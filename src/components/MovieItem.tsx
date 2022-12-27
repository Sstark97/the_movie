import type { Movie } from "@customTypes/movies"
import { IMG_URI } from "../const"

const MovieItem = ({ movie }: {movie: Movie}) => {
  return (
    <li>
        <img src={`${IMG_URI}${movie.poster_path}`} alt="poster" />
    </li>
  )
}

export default MovieItem