import { useSearchParams } from "react-router-dom"
import MovieDetail from "@components/MovieDetail"

const Movie = () => {
  const [ searchParams ] = useSearchParams()
  const title = searchParams.get("title") as string

  return (
    <MovieDetail title={title} />
  )
}

export default Movie