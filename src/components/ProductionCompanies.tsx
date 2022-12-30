import type { ProductionCompaniesProps } from "@customTypes/movie"
import "@styles/components/ProductionCompanies.scss"

const ProductionCompanies = ({ productionCompanies }: ProductionCompaniesProps) => {
    console.log(productionCompanies.length)
  return (
    <ul className="productions_container">
      <li>Production: </li>
      {productionCompanies.map(production => (
        <li key={production.id}>{production.name}</li>
      ))}
    </ul>
  )
}

export default ProductionCompanies
