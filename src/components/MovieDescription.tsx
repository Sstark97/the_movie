import useMovieDetails from "@hooks/useMovieDetail"
import type { MovieDetailProps } from "@customTypes/movie"

const MovieDescription = ({ id }: MovieDetailProps) => {
  const { movie } = useMovieDetails(id)
  const { tagline, overview } = movie

  return (
    <div id="description">
      <h3>{tagline}</h3>
      <p>{overview}</p>
    </div>
  )
}

export default MovieDescription
