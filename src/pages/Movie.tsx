import { useSearchParams } from "react-router-dom"
import MovieDetail from "@containers/MovieDetail"

const Movie = () => {
  const [ searchParams ] = useSearchParams()
  const title = searchParams.get("title") as string

  return (
    <MovieDetail searchTitle={title} />
  )
}

export default Movie