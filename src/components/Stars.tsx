import type { StarsProps } from "@customTypes/movies"
import "@styles/components/Stars.scss"

const Stars = ({ popularity }: StarsProps) => {
  
  /**
   * Controll Popularity in a scale of 5000, with 
   * these calculate the number of Stars have a Movie
   */
  const popularityTransform = popularity >= 5000 ? 5 : parseFloat(((popularity * 5) / 5000).toFixed(1))
  const stars = Math.round(popularityTransform)
  const stars_arr = Array(stars === 0 ? 1 : stars).fill("★")

  return (
    <div className="stars">
      {stars_arr.map((star: string, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  )
}

export default Stars
