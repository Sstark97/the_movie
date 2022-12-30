import { Link } from "react-router-dom"
import moment from "moment"
import Stars from "./Stars"
import type { Movie } from "@customTypes/movies"
import { IMG_URI } from "../const"
import "@styles/components/MovieItem.scss"

const MovieItem = ({ movie }: { movie: Movie }) => {
  const { id, poster_path, title, release_date, popularity } = movie

  // Format Date with moment.js and in English Format
  const formatDate = moment(release_date).format("ll")

  return (
    <li className="movie_item">
      <Link
        to={{
          pathname: "/movie",
          search: `?id=${id}`,
        }}
      >
        <img src={`${IMG_URI}${poster_path}`} alt="poster" />
        <div className="movie_info">
          <Stars popularity={popularity} />
          <h3>{title}</h3>
          <p>{formatDate}</p>
        </div>
      </Link>
    </li>
  )
}

export default MovieItem
