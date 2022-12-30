import useMovieDetails from "@hooks/useMovieDetail"
import type { MovieDetailsFormat } from "@customTypes/movie"

const MovieInfo = ({ movieInfo, id }: { movieInfo: string[]; id: number }) => {
  const { movie } = useMovieDetails(id)
  const isAMovieProperty = (str: string): str is keyof MovieDetailsFormat => {
    return movieInfo.includes(str)
  }

  return (
    <div className="info_container">
      {movieInfo.map((info) => {
        const infoFormat = info.split("_").map(infoStr => `${infoStr.charAt(0).toUpperCase()}${infoStr.slice(1)}`).join(" ")

        return isAMovieProperty(info) ? <p>{`${infoFormat}: ${movie[info] as string}`}</p> : null
      })}
    </div>
  )
}

export default MovieInfo
