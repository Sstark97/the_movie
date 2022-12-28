import { useSearchParams } from "react-router-dom";

const Movie = () => {
  const [ searchParams ] = useSearchParams();
  const title = searchParams.get("title");

  return (
    <div>
      {title}
    </div>
  )
}

export default Movie