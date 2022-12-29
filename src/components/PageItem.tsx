import useMovies from "@hooks/useMovies"
import usePagination from "@hooks/usePagination"
import type { AppContextInterface } from "@customTypes/context"

const PageItem = ({ numberPage }: { numberPage: string | number }) => {
  const { page }: AppContextInterface = useMovies()
  const { handleChangeNumberPage } = usePagination()

  const handleChangePageInItem = () => {
    if (typeof numberPage === "number") {
      handleChangeNumberPage(numberPage)
    }
  }

  return (
    <li>
      <button className={page === numberPage ? "selected" : ""} onClick={handleChangePageInItem}>
        {numberPage}
      </button>
    </li>
  )
}

export default PageItem
