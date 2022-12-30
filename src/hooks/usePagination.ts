import { useState, useEffect } from "react"
import useMovies from "@hooks/useMovies"
import type { AppContextInterface } from "@customTypes/context"

/**
 * Custom hook that allow to change the movies in Context
 * whit a Server Pagination
 * @returns nearPages handleChangePreviousPage, handleChangeNextPage 
 * and handleChangeNumberPag
 */
const usePagination = () => {
  const [nearPages, setNearPages] = useState<(number | string)[]>([])
  const { page, totalPages, handleChangePage }: AppContextInterface = useMovies()

  /**
   * Function that generate the range of near pages
   * and set in state these range for generate the
   * pagination
   */
  const generateRangeOfPages = () => {
    if (page <= 4) {
      /**
       * First Case: See the first, the next four numbers and
       * the last one
       */
      setNearPages([1, 2, 3, 4, 5, "...", totalPages])
    } else if (page <= totalPages - 3) {
      /**
       * Second Case: See the first, the current page, previous, next
       * and final page
       */
      setNearPages([1, "...", page - 1, page, page + 1, "...", totalPages])
    } else {
      /**
       * Third Case: See the first, the previous four numbers of last and
       * final page
       */
      setNearPages([1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages])
    }
  }

  useEffect(() => {
    generateRangeOfPages()
  }, [page])

  /**
   * Function that give the previous page
   * if current page is grater than 1
   */
  const handleChangePreviousPage = () => {
    if (page > 1) {
      handleChangePage(page - 1)
    }
  }

  /**
   * Function that give the next page
   * if current page is less or equal than 1
   * and it´s different to totalPages
   */
  const handleChangeNextPage = () => {
    if (page >= 1 && page !== totalPages) {
      handleChangePage(page + 1)
    }
  }

  /**
   * Function that change the page to the number given
   * by param
   * @param numberPage
   */
  const handleChangeNumberPage = (numberPage: number) => {
    handleChangePage(numberPage)
  }

  return {
    nearPages,
    handleChangePreviousPage,
    handleChangeNextPage,
    handleChangeNumberPage,
  }
}

export default usePagination
