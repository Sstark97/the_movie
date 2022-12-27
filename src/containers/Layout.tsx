import Header from "@components/Header"
import Footer from "@components/Footer"
import type { Children } from "@customTypes/globals"

const Layout = ({ children }: Children) => {
  return (
    <>
        <Header/>
        <main>
            { children }
        </main>
        <Footer />
    </>
  )
}

export default Layout