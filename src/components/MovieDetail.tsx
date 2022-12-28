import moment from "moment"
import useMovies from "@hooks/useMovies"
import { IMG_URI } from "../const"
import type { AppContextInterface } from "@customTypes/context"
import type { Movie } from "@customTypes/movies"
import Stars from "@components/Stars"

const MovieDetail = ({ title }: { title: string }) => {
  const { movies }: AppContextInterface = useMovies()
  const movie: Movie = movies.find((currentMovie) => currentMovie.original_title === title) as Movie
  const { poster_path, original_title, release_date, overview, popularity } = movie
  const formatDate = moment(release_date).format("D/MM/Y")
  const year = moment(release_date).format("Y")
  // Format popularity in base to 5 stars like the most
  const popularityPercent = popularity >= 5000 ? 5 : parseFloat(((popularity * 5) / 5000).toFixed(1))
  
  return (
    <div>
      <img src={`${IMG_URI}${poster_path}`} alt={original_title} />
      <p>{`${original_title} (${year})`}</p>
      <Stars stars={Math.round(popularityPercent)} />
      <p>{formatDate}</p>
      <p>{overview}</p>
    </div>
  )
}

export default MovieDetail
