import usePagination from "@hooks/usePagination"

const PageItem = ({ numberPage}: {numberPage: string | number}) => {
    const { handleChangeNumberPage } = usePagination()
  return (
    <li>
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
  )
}

export default PageItem
