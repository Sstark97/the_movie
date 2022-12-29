import usePagination from "@hooks/usePagination"

const PageItem = ({ numberPage }: { numberPage: string | number }) => {
  const { handleChangeNumberPage } = usePagination()

  const handleChangePageInItem = () => {
    if (typeof numberPage === "number") {
      handleChangeNumberPage(numberPage)
    }
  }

  return (
    <li>
      <button onClick={handleChangePageInItem}>{numberPage}</button>
    </li>
  )
}

export default PageItem
