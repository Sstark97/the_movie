import useMovieDetails from "@hooks/useMovieDetail"
import Loading from "@components/Loading"
import MoviePoster from "@components/MoviePoster"
import MovieAllInfo from "@containers/MovieAllInfo"
import type { MovieDetailProps } from "@customTypes/movie"
import "@styles/containers/MovieDetails.scss"

const MovieDetail = ({ id }: MovieDetailProps) => {
  const { movie, loading } = useMovieDetails(id)

  const { popularity } = movie

  return (
    <>
      {!loading && popularity ? (
        <div className="movie_details">
          <MoviePoster id={id} />
          <MovieAllInfo id={id} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default MovieDetail
