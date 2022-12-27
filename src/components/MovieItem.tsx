import type { Movie } from "@customTypes/movies"
import { IMG_URI } from "../const"
import "@styles/components/MovieItem.scss"

const MovieItem = ({ movie }: {movie: Movie}) => {
  return (
    <li>
        <img src={`${IMG_URI}${movie.poster_path}`} alt="poster" />
        <div className="movie_info">
            <h3>{movie.original_title}</h3>
            <p>{movie.release_date}</p>
            <p>{movie.popularity}</p>
        </div>
    </li>
  )
}

export default MovieItem