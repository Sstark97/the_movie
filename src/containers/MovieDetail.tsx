import { useEffect } from "react"
import moment from "moment"
import useMovies from "@hooks/useMovies"
import Stars from "@components/Stars"
import { IMG_URI } from "../const"
import type { AppContextInterface } from "@customTypes/context"
import type { MovieDetailProps } from "@customTypes/movie"
import "@styles/containers/MovieDetails.scss"

const MovieDetail = ({ id }: MovieDetailProps) => {
  const { movie, loading, handleChangeMovieId }: AppContextInterface = useMovies()

  useEffect(() => {
    handleChangeMovieId(id)
  }, [])
  // const movie: Movie = movies.find((currentMovie) => currentMovie.id === id) as Movie
  const { poster_path, title, original_title, original_language, release_date, overview, popularity, vote_average, vote_count } = movie
  const formatDate = moment(release_date).format("D/MM/Y")
  const year = moment(release_date).format("Y")

  console.log(movie)

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
