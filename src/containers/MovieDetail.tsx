import moment from "moment"
import useMovies from "@hooks/useMovies"
import { IMG_URI } from "../const"
import type { AppContextInterface } from "@customTypes/context"
import type { Movie } from "@customTypes/movies"
import Stars from "@components/Stars"
import "@styles/containers/MovieDetails.scss"

const MovieDetail = ({ searchTitle }: { searchTitle: string }) => {
  const { movies }: AppContextInterface = useMovies()
  const movie: Movie = movies.find((currentMovie) => currentMovie.original_title === searchTitle) as Movie
  const { poster_path, title, original_title, original_language, release_date, overview, popularity, vote_average, vote_count } = movie
  const formatDate = moment(release_date).format("D/MM/Y")
  const year = moment(release_date).format("Y")
  // Format popularity in base to 5 stars like the most
  const popularityPercent = popularity >= 5000 ? 5 : parseFloat(((popularity * 5) / 5000).toFixed(1))
  
  return (
    <div className="movie_details">
      <img src={`${IMG_URI}${poster_path}`} alt={title} />
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
      <p>{overview}</p>
    </div>
  )
}

export default MovieDetail
