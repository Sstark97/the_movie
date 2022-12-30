import useMovieDetails from "@hooks/useMovieDetail"
import Stars from "@components/Stars"
import type { MovieDetailProps } from "@customTypes/movie"

const MoviePopularity = ({ id }: MovieDetailProps) => {
  const { movie } = useMovieDetails(id)
  const { popularity, formatDate } = movie

  return (
    <div className="info_container">
      <Stars popularity={popularity} />
      <p>{formatDate}</p>
    </div>
  )
}

export default MoviePopularity
