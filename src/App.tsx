import { useState, useEffect } from "react"
import Layout from "@containers/Layout"
import { API_MOST_POPULAR } from "./const"
import "@styles/App.scss"

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(API_MOST_POPULAR)
      const data = await response.json()
      setData(data.results)
    }

    loadData()
  }, [])

  return (
    <Layout>
      {data.map((e: any) => <div key={e.id}>{e.original_title}</div>)}
    </Layout>
  )
}

export default App
