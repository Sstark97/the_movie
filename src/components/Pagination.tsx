import useMovies from "@hooks/useMovies"
import type { AppContextInterface } from "@customTypes/context"

const Pagination = () => {
  const { page, totalPages, handleChangePage }: AppContextInterface = useMovies()

  const handleChangePreviousPage = () => {
    if(page > 1) {
        handleChangePage(page - 1)
    }
  }

  const handleChangeNextPage = () => {
    if(page >= 1 && page !== totalPages) {
        handleChangePage(page + 1)
    }
  }

  return (
    <div>
      {page > 1 ? <button onClick={handleChangePreviousPage}>Previous</button> : null}
      {page >= 1 && page !== totalPages ? <button onClick={handleChangeNextPage}>Next</button> : null}
    </div>
  )
}

export default Pagination
