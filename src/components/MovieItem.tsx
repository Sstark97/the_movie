import moment from "moment"
import type { Movie } from "@customTypes/movies"
import { IMG_URI } from "../const"
import "@styles/components/MovieItem.scss"

const MovieItem = ({ movie }: { movie: Movie }) => {
  const { poster_path, original_title, release_date, popularity } = movie

  // Format Date with moment.js and in English Format
  const formatDate = moment(release_date).format("ll")
  const popularityPercent = popularity >= 5000 ? 5 : (popularity * 5 / 5000).toFixed(2)

  return (
    <li>
      <img src={`${IMG_URI}${poster_path}`} alt="poster" />
      <div className="movie_info">
        <h3>{original_title}</h3>
        <p>{formatDate}</p>
        <p>{popularityPercent}</p>
      </div>
    </li>
  )
}

export default MovieItem
