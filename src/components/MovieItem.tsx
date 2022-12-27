import type { Movie } from "@customTypes/movies"
import { IMG_URI } from "../const"
import "@styles/components/MovieItem.scss"

const MovieItem = ({ movie }: {movie: Movie}) => {
  return (
    <li>
        <img src={`${IMG_URI}${movie.poster_path}`} alt="poster" />
    </li>
  )
}

export default MovieItem