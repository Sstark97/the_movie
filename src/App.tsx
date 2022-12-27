import { useState, useEffect } from "react"
import Layout from "@containers/Layout"
import type { Movie, Response } from "@customTypes/movies"
import { API_MOST_POPULAR } from "./const"
import "@styles/App.scss"
import MovieList from "@containers/MovieList"

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
      <h1>Most Popular Movies</h1>
      {data ? <MovieList movies={data}/> : null}
    </Layout>
  )
}

export default App
