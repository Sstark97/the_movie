import { lazy } from "react"
import { Routes } from "@customTypes/routes"

const Home = lazy(() => import("@pages/Home"))
// const Movie = lazy(() => import("@pages/Movie"));
// const NotFound = lazy(() => import("@pages/NotFound"));

const ROUTER: Routes[] = [
  { route: "/", element: Home },
  // { route: "/details", element: Movie },
  // { route: "*", element: NotFound },
]

// Complete endPoint of API with api key
const API_MOST_POPULAR = `${import.meta.env.VITE_API}movie/popular?api_key=${import.meta.env.VITE_API_KEY_AUTH_V3}`

// That´s the base url of movies films
const IMG_URI = "https://image.tmdb.org/t/p/w220_and_h330_face/"

export { API_MOST_POPULAR, IMG_URI, ROUTER }
