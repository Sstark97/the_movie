import useMovieDetails from "@hooks/useMovieDetail"
import Stars from "@components/Stars"
import Genres from "@components/Genres"
import ProductionCompanies from "@components/ProductionCompanies"
import { IMG_URI } from "../const"
import type { MovieDetailProps } from "@customTypes/movie"
import "@styles/containers/MovieDetails.scss"

const MovieDetail = ({ id }: MovieDetailProps) => {
  const { movie, loading } = useMovieDetails(id)

  const { 
    formatDate, 
    genres, 
    original_language, 
    original_title, 
    popularity, 
    poster_path,
    production_companies,
    overview, 
    title, 
    tagline, 
    vote_average, 
    vote_count, 
    year 
  } = movie

  console.log(movie)

  return (
    <>
      {!loading && popularity ? (
        <div className="movie_details">
          <figure>
            <img src={`${IMG_URI}${poster_path}`} alt={title} />
          </figure>
          <div className="several_info">
            <div className="title_container">
              <h2>{`${title} (${year})`}</h2>
              <Genres genres={genres} />
            </div>
            <div className="info_container">
              <Stars popularity={popularity} />
              <p>{formatDate}</p>
            </div>
            <ProductionCompanies productionCompanies={production_companies}/>
            <div className="info_container">
              <p>Original Title: {original_title}</p>
              <p>Language: {original_language}</p>
              <p></p>
            </div>
            <div className="info_container">
              <p>Vote Average: {vote_average}</p>
              <p>Total Votes: {vote_count}</p>
            </div>
            <div id="description">
              <h3>{tagline.replace(".", "")}</h3>
              <p>{overview}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  )
}

export default MovieDetail
