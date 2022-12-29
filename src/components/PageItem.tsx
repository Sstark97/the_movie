import useMovies from "@hooks/useMovies"
import usePagination from "@hooks/usePagination"
import type { AppContextInterface } from "@customTypes/context"

const PageItem = ({ numberPage }: { numberPage: string | number }) => {
  const { page }: AppContextInterface = useMovies()
  const { handleChangeNumberPage } = usePagination()
  const selectedClassName = page === numberPage ? "selected" : "" 
  const numberClassName = typeof numberPage === "number" ? "number" : ""

  const handleChangePageInItem = () => {
    if (typeof numberPage === "number") {
      handleChangeNumberPage(numberPage)
    }
  }

  return (
    <li>
      <button className={`${selectedClassName} ${numberClassName}`} onClick={handleChangePageInItem}>{numberPage}</button>
    </li>
  )
}

export default PageItem
