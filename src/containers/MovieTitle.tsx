import useMovieDetails from "@hooks/useMovieDetail"
import Genres from "@components/Genres"
import type { MovieDetailProps } from "@customTypes/movie"

const MovieTitle = ({ id }: MovieDetailProps) => {
  const { movie } = useMovieDetails(id)
  const { genres, title, year } = movie
  
  return (
    <div className="title_container">
      <h2>{`${title} (${year})`}</h2>
      <Genres genres={genres} />
    </div>
  )
}

export default MovieTitle
