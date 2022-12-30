import type { GenreProps } from "@customTypes/movie"
import "@styles/components/Genres.scss"

const Genres = ({ genres }: GenreProps) => {
  return (
    <ul className="genres_container">
        {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default Genres