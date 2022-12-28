import useMovies from "@hooks/useMovies"
import type { AppContextInterface } from "@customTypes/context"
import "@styles/components/Error.scss"

const Error = () => {
  const { error }: AppContextInterface = useMovies()
  
  return (
    <div className="error">
        <h2>Something gone wrong!</h2>
        <p>{error}</p>
    </div>
  )
}

export default Error