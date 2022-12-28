import { MovieProvider } from "@context/MovieProvider"
import Header from "@components/Header"
import Footer from "@components/Footer"
import type { Children } from "@customTypes/globals"
import "@styles/containers/Layout.scss"

const Layout = ({ children }: Children) => {
  return (
    <MovieProvider>
      <div className="app_container">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </MovieProvider>
  )
}

export default Layout
