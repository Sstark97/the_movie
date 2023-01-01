import useMovieDetails from "@hooks/useMovieDetail"
import Loading from "@components/Loading"
import Error from "@components/Error"
import MoviePoster from "@components/MoviePoster"
import MovieAllInfo from "@containers/MovieAllInfo"
import type { MovieDetailProps } from "@customTypes/movie"
import "@styles/containers/MovieDetails.scss"

const MovieDetail = ({ id }: MovieDetailProps) => {
  const { movie, loading, error} = useMovieDetails(id)

  const { popularity } = movie

  return (
    <>
      { error ? <Error /> : null}
      { loading ? <Loading /> : null}
      {!loading && !error  && popularity ? (
        <div className="movie_details">
          <MoviePoster id={id} />
          <MovieAllInfo id={id} />
        </div>
      ) : (
        null
      )}
    </>
  )
}

export default MovieDetail
