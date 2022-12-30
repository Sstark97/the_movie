import { useSearchParams } from "react-router-dom"
import MovieDetail from "@containers/MovieDetail"

const Movie = () => {
  const [ searchParams ] = useSearchParams()
  const id = parseInt(searchParams.get("id") as string)

  return (
    <MovieDetail id={id} />
  )
}

export default Movie