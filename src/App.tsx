import { useState, useEffect } from "react"
import Layout from "@containers/Layout"
import type { Movie, Response } from "@customTypes/movies"
import { API_MOST_POPULAR } from "./const"
import "@styles/App.scss"

const App = () => {
  const [data, setData] = useState<Movie[]>([])

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(API_MOST_POPULAR)
      const data: Response = await response.json()
      console.log(data)
      setData(data.results)
    }

    loadData()
  }, [])

  return (
    <Layout>
      {data.map((e: Movie) => <div key={e.id}>{e.original_title}</div>)}
    </Layout>
  )
}

export default App
