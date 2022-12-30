import MovieTitle from "@containers/MovieTitle"
import MoviePopularity from "@containers/MoviePopularity"
import MovieDescription from "@components/MovieDescription"
import ProductionCompanies from "@components/ProductionCompanies"
import type { MovieDetailProps } from "@customTypes/movie"
import MovieInfo from "@components/MovieInfo"
import "@styles/containers/MovieAllInfo.scss"

const MovieAllInfo = ({ id }: MovieDetailProps) => {
  return (
    <div className="several_info">
      <MovieTitle id={id} />
      <MoviePopularity id={id} />
      <ProductionCompanies id={id} />
      <MovieInfo id={id} movieInfo={["original_title", "original_language"]} />
      <MovieInfo id={id} movieInfo={["vote_average", "vote_count"]} />
      <MovieDescription id={id} />
    </div>
  )
}

export default MovieAllInfo
