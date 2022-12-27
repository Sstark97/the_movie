import { Movie } from "@customTypes/movies"

const MovieList = ({ movies }: {movies: Movie[]}) => {
  return (
    <ul>
        {movies.map((e: Movie) => <li key={e.id}>{e.original_title}</li>)}
    </ul>
  )
}

export default MovieList