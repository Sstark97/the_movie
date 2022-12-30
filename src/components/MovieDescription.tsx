import useMovieDetails from "@hooks/useMovieDetail"
import type { MovieDetailProps } from "@customTypes/movie"
import "@styles/components/MovieDescription.scss"

const MovieDescription = ({ id }: MovieDetailProps) => {
  const { movie } = useMovieDetails(id)
  const { tagline, overview } = movie

  return (
    <div id="description">
      <h3>{tagline.replace(".", "")}</h3>
      <p>{overview}</p>
    </div>
  )
}

export default MovieDescription
