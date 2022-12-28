import moment from "moment"
import Stars from "./Stars"
import type { Movie } from "@customTypes/movies"
import { IMG_URI } from "../const"
import "@styles/components/MovieItem.scss"

const MovieItem = ({ movie }: { movie: Movie }) => {
  const { poster_path, original_title, release_date, popularity } = movie

  // Format Date with moment.js and in English Format
  const formatDate = moment(release_date).format("ll")

  // Format popularity in base to 5 stars like the most
  const popularityPercent = popularity >= 5000 ? 5 : parseFloat((popularity * 5 / 5000).toFixed(1))

  return (
    <li>
      <img src={`${IMG_URI}${poster_path}`} alt="poster" />
      <div className="movie_info">
        <Stars stars={Math.round(popularityPercent)}/>
        <h3>{original_title}</h3>
        <p>{formatDate}</p>
      </div>
    </li>
  )
}

export default MovieItem
