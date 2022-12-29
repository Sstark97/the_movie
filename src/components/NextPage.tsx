import useMovies from "@hooks/useMovies"
import usePagination from "@hooks/usePagination"
import type { AppContextInterface } from "@customTypes/context"

const NextPage = () => {
  const { page, totalPages }: AppContextInterface = useMovies()
  const { handleChangeNextPage } = usePagination()

  return (
    <li>
      <button className="not_number_btn" disabled={page === totalPages} onClick={handleChangeNextPage}>
        {">"}
      </button>
    </li>
  )
}

export default NextPage
