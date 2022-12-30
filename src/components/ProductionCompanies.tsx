import useMovieDetails from "@hooks/useMovieDetail"
import type { MovieDetailProps } from "@customTypes/movie"
import "@styles/components/ProductionCompanies.scss"

const ProductionCompanies = ({ id }: MovieDetailProps) => {
  const { movie } = useMovieDetails(id)

  const { production_companies } = movie
  return (
    <ul className="productions_container">
      <li>Production: </li>
      {production_companies.map((production) => (
        <li key={production.id}>{production.name}</li>
      ))}
    </ul>
  )
}

export default ProductionCompanies
