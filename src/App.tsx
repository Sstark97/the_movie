import Layout from "@containers/Layout"
import "@styles/App.scss"
import MovieList from "@containers/MovieList"

const App = () => {

  return (
    <Layout>
      <h1>Most Popular Movies</h1>
      <MovieList />
    </Layout>
  )
}

export default App
