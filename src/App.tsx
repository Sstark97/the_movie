import { useEffect } from "react"
import Layout from "@containers/Layout"
import { API_MOST_POPULAR } from "./const"
import "@styles/App.scss"

const App = () => {

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(API_MOST_POPULAR)
      const data = await response.json()
      console.log(data)
    }

    loadData()
  }, [])

  return (
    <Layout>
      <p>Hola</p>
    </Layout>
  )
}

export default App
