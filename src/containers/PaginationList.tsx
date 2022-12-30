import usePagination from "@hooks/usePagination"
import useMovies from "@hooks/useMovies"
import PreviousPage from "@components/PreviousPage"
import PageItem from "@components/PageItem"
import NextPage from "@components/NextPage"
import { v4 as uuidv4 } from "uuid"
import type { AppContextInterface } from "@customTypes/context"
import "@styles/containers/PaginationList.scss"

const Pagination = () => {
  const { nearPages } = usePagination()
  const { loading, error }: AppContextInterface = useMovies()

  // I use  uuidv4 for get unique keys to PageItem
  return (
    <>
      {!loading && !error ? (
        <ul className="pagination">
          <PreviousPage />
          {nearPages.map((numberPage) => (
            <PageItem key={uuidv4()} numberPage={numberPage} />
          ))}
          <NextPage />
        </ul>
      ) : null}
    </>
  )
}

export default Pagination
