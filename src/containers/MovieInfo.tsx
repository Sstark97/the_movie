import useMovieDetails from "@hooks/useMovieDetail"
import MovieTitle from "./MovieTitle"
import Stars from "@components/Stars"
import ProductionCompanies from "@components/ProductionCompanies"
import type { MovieDetailProps } from "@customTypes/movie"

const MovieInfo = ({ id }: MovieDetailProps) => {
  const { movie } = useMovieDetails(id)

  const { formatDate, original_language, original_title, popularity, production_companies, overview, tagline, vote_average, vote_count } = movie

  return (
    <>
        <div className="several_info">
          <MovieTitle id={id}/>
          <div className="info_container">
            <Stars popularity={popularity} />
            <p>{formatDate}</p>
          </div>
          <ProductionCompanies productionCompanies={production_companies} />
          <div className="info_container">
            <p>Original Title: {original_title}</p>
            <p>Language: {original_language}</p>
          </div>
          <div className="info_container">
            <p>Vote Average: {vote_average}</p>
            <p>Total Votes: {vote_count}</p>
          </div>
          <div id="description">
            <h3>{tagline}</h3>
            <p>{overview}</p>
          </div>
        </div>
    </>
  )
}

export default MovieInfo
