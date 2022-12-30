import useMovieDetails from "@hooks/useMovieDetail"
import MoviePoster from "@components/MoviePoster"
import MovieInfo from "@containers/MovieInfo"
import type { MovieDetailProps } from "@customTypes/movie"
import "@styles/containers/MovieDetails.scss"

const MovieDetail = ({ id }: MovieDetailProps) => {
  const { movie, loading } = useMovieDetails(id)

  const { popularity } = movie

  console.log(movie)

  return (
    <>
      {!loading && popularity ? (
        <div className="movie_details">
          <MoviePoster id={id} />
          <MovieInfo id={id} />
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  )
}

export default MovieDetail
