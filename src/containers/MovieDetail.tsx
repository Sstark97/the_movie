import moment from "moment"
import useMovies from "@hooks/useMovies"
import Stars from "@components/Stars"
import { IMG_URI } from "../const"
import type { AppContextInterface } from "@customTypes/context"
import type { Movie, MovieDetailProps } from "@customTypes/movies"
import "@styles/containers/MovieDetails.scss"

const MovieDetail = ({ searchTitle }: MovieDetailProps) => {
  const { movies }: AppContextInterface = useMovies()
  const movie: Movie = movies.find((currentMovie) => currentMovie.title === searchTitle) as Movie
  const { poster_path, title, original_title, original_language, release_date, overview, popularity, vote_average, vote_count } = movie
  const formatDate = moment(release_date).format("D/MM/Y")
  const year = moment(release_date).format("Y")
  // Format popularity in base to 5 stars like the most
  const popularityPercent = popularity >= 5000 ? 5 : parseFloat(((popularity * 5) / 5000).toFixed(1))

  return (
    <div className="movie_details">
      <figure>
        <img src={`${IMG_URI}${poster_path}`} alt={title} />
      </figure>
      <div className="several_info">
        <h2>{`${title} (${year})`}</h2>
        <div className="info_container">
          <Stars stars={Math.round(popularityPercent)} />
          <p>{formatDate}</p>
        </div>
        <div className="info_container">
          <p>Original Title: {original_title}</p>
          <p>Language: {original_language}</p>
          <p></p>
        </div>
        <div className="info_container">
          <p>Vote Average: {vote_average}</p>
          <p>Total Votes: {vote_count}</p>
        </div>
        <p id="description">{overview}</p>
      </div>
    </div>
  )
}

export default MovieDetail
