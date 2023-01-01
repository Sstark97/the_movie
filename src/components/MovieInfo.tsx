import { v4 as uuidv4 } from "uuid"
import useMovieDetails from "@hooks/useMovieDetail"
import type { MovieDetailsFormat, MovieInfoProps } from "@customTypes/movie"

const MovieInfo = ({ movieInfo, id }: MovieInfoProps) => {
  const { movie } = useMovieDetails(id)

  /**
   * Function that comprobe if a string
   * is a key of MovieDetailsFormat
   * @param str
   * @returns boolean
   */
  const isAMovieProperty = (str: string): str is keyof MovieDetailsFormat => {
    return movieInfo.includes(str)
  }

  return (
    <div className="info_container">
      {movieInfo.map((info) => {
        /**
         * Capitalize the Movie Propertie for use it
         * by a label to have a description of the info displayed
         */
        const infoFormat = info
          .split("_")
          .map((infoStr) => `${infoStr.charAt(0).toUpperCase()}${infoStr.slice(1)}`)
          .join(" ")

        return isAMovieProperty(info) ? <p key={uuidv4()}>{`${infoFormat}: ${movie[info] as string}`}</p> : null
      })}
    </div>
  )
}

export default MovieInfo
