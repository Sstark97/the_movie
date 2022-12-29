import { useState, useEffect } from "react"
import useMovies from "@hooks/useMovies"
import type { AppContextInterface } from "@customTypes/context"
import { v4 as uuidv4 } from "uuid"

const Pagination = () => {
  const { page, totalPages, handleChangePage }: AppContextInterface = useMovies()
  const [nearPages, setNearPages] = useState<(number | string)[]>([])

  useEffect(() => {
    if (page <= 4) {
      setNearPages([1, 2, 3, 4, 5, "...", totalPages])
    } else if (page <= totalPages - 3) {
      setNearPages([1, "...", page - 1, page, page + 1, "...", totalPages])
    } else {
      setNearPages([1, "...", page - 4, page - 3, page - 2, page - 1, totalPages])
    }
  }, [page])

  const handleChangePreviousPage = () => {
    if (page > 1) {
      handleChangePage(page - 1)
    }
  }

  const handleChangeNextPage = () => {
    if (page >= 1 && page !== totalPages) {
      handleChangePage(page + 1)
    }
  }

  const handleChangeNumberPage = (numberPage: number) => {
    handleChangePage(numberPage)
  }

  return (
    <ul>
      <li>
        <button disabled={page === 1} onClick={handleChangePreviousPage}>
          {"<"}
        </button>
      </li>
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
