import usePagination from "@hooks/usePagination"
import PreviousPage from "@components/PreviousPage"
import PageItem from "@components/PageItem"
import NextPage from "@components/NextPage"
import { v4 as uuidv4 } from "uuid"

const Pagination = () => {
  const { nearPages } = usePagination()

  return (
    <ul>
      <PreviousPage />
      {nearPages.map((numberPage) => <PageItem key={uuidv4()} numberPage={numberPage}/>)}
      <NextPage />
    </ul>
  )
}

export default Pagination
