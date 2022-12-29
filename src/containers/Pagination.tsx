import useMovies from "@hooks/useMovies"
import usePagination from "@hooks/usePagination"
import PreviousPage from "@components/PreviousPage"
import type { AppContextInterface } from "@customTypes/context"
import { v4 as uuidv4 } from "uuid"

const Pagination = () => {
  const { page, totalPages }: AppContextInterface = useMovies()
  const { nearPages, handleChangeNextPage, handleChangeNumberPage } = usePagination()

  return (
    <ul>
      <PreviousPage />
      {nearPages.map((numberPage) => (
        <li key={uuidv4()}>
          {typeof numberPage === "string" ? (
            <button>{numberPage}</button>
          ) : (
            <button
              onClick={() => {
                handleChangeNumberPage(numberPage)
              }}
            >
              {numberPage}
            </button>
          )}
        </li>
      ))}
      <li>
        <button disabled={page === totalPages} onClick={handleChangeNextPage}>
          {">"}
        </button>
      </li>
    </ul>
  )
}

export default Pagination
