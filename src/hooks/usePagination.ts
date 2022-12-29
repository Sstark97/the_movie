import { useState, useEffect } from "react"
import useMovies from "@hooks/useMovies"
import type { AppContextInterface } from "@customTypes/context"

const usePagination = () => {
  const [nearPages, setNearPages] = useState<(number | string)[]>([])
  const { page, totalPages, handleChangePage}: AppContextInterface = useMovies()

  const generateRangeOfPages = () => {
    if (page <= 4) {
        setNearPages([1, 2, 3, 4, 5, "...", totalPages])
      } else if (page <= totalPages - 3) {
        setNearPages([1, "...", page - 1, page, page + 1, "...", totalPages])
      } else {
        setNearPages([1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages])
      }
  }

  useEffect(() => {
    generateRangeOfPages()
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

  return {
    nearPages,
    handleChangePreviousPage,
    handleChangeNextPage,
    handleChangeNumberPage
  }
}

export default usePagination
