import useMovieDetails from "@hooks/useMovieDetail"
import Stars from "@components/Stars"
import { IMG_URI } from "../const"
import type { MovieDetailProps } from "@customTypes/movie"
import "@styles/containers/MovieDetails.scss"

const MovieDetail = ({ id }: MovieDetailProps) => {
  const { movie, loading } = useMovieDetails(id)

  const { 
    poster_path, 
    title, 
    original_title, 
    original_language, 
    overview, popularity, 
    vote_average, 
    vote_count,
    formatDate,
    year
  } = movie

  return (
    <>
      {!loading && popularity ? (
        <div className="movie_details">
          <figure>
            <img src={`${IMG_URI}${poster_path}`} alt={title} />
          </figure>
          <div className="several_info">
            <h2>{`${title} (${year})`}</h2>
            <div className="info_container">
              <Stars popularity={popularity} />
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
      ) : (
        <div>Loading</div>
      )}
    </>
  )
}

export default MovieDetail
