import useMovies from "@hooks/useMovies"
import usePagination from "@hooks/usePagination"
import type { AppContextInterface } from "@customTypes/context"

const PreviousPage = () => {
  const { page }: AppContextInterface = useMovies()
  const { handleChangePreviousPage } = usePagination()
  
  return (
    <li>
      <button disabled={page === 1} onClick={handleChangePreviousPage}>
        {"<"}
      </button>
    </li>
  )
}

export default PreviousPage
