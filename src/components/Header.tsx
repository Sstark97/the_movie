import { Link } from "react-router-dom"
import "@styles/components/Header.scss"

const Header = () => {
  return (
    <header>
      <Link to="/">
        <span id="span_title">MOVIE</span>IN
      </Link>
    </header>
  )
}

export default Header
