import useMovieDetails from "@hooks/useMovieDetail"
import { IMG_URI } from "../const"
import type { MovieDetailProps } from "@customTypes/movie"

const MoviePoster = ({ id }: MovieDetailProps) => {
  const { movie, loading } = useMovieDetails(id)

  const { poster_path, title } = movie

  return (
    <>
      {!loading ? (
        <figure>
          <img src={`${IMG_URI}${poster_path}`} alt={title} />
        </figure>
      ) : null}
    </>
  )
}

export default MoviePoster
