import moment from "moment"
import { useSearchParams } from "react-router-dom"
import useMovies from "@hooks/useMovies"
import { IMG_URI } from "../const"
import type { AppContextInterface } from "@customTypes/context"
import type { Movie } from "@customTypes/movies"

const Movie = () => {
  const [ searchParams ] = useSearchParams()
  const title = searchParams.get("title")
  const { movies }: AppContextInterface = useMovies()
  const movie: Movie = movies.find(currentMovie => currentMovie.original_title === title) as Movie
  const { poster_path, original_title, release_date, overview } = movie
  const formatDate = moment(release_date).format("D/MM/Y")
  const year = moment(release_date).format("Y")

  return (
    <div>
      <img src={`${IMG_URI}${poster_path}`} alt={original_title} />
      <p>{`${original_title} (${year})`}</p>
      <p>{formatDate}</p>
      <p>{overview}</p>
    </div>
  )
}

export default Movie