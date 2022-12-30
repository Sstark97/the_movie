import type { StarsProps } from "@customTypes/movies"
import "@styles/components/Stars.scss"

const Stars = ({ stars }: StarsProps) => {
  
  // Create an array with the numbers of Stars pass in props
  const stars_arr = Array(stars).fill("★")

  return (
    <div className="stars">
      {stars_arr.map((star: string, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  )
}

export default Stars
