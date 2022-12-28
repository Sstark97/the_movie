import { Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ROUTER } from "../const"
import Layout from "@containers/Layout"

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense>
          <Routes>
            {ROUTER.map((route) => (
              <Route key={route.route} path={route.route} element={<route.element />} />
            ))}
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}

export default App
