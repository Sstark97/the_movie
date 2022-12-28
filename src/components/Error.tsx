import useMovies from "@hooks/useMovies"
import type { AppContextInterface } from "@customTypes/context"
import "@styles/components/Error.scss"

const Error = () => {
  const { error }: AppContextInterface = useMovies()
  
  return (
    <div>
        {error}
    </div>
  )
}

export default Error