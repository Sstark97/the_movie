import { lazy } from "react"
import { Routes } from "@customTypes/routes"

/**
 * These dynamics imports implement lazy load
 * and incresea the performance of the App
 */
const Home = lazy(() => import("@pages/Home"))
const Movie = lazy(() => import("@pages/Movie"))
const NotFound = lazy(() => import("@pages/NotFound"));

/**
 * These way to define the router give the posibility
 * to change the Route in one side and have a clean code
 * in the Router Component
 */
const ROUTER: Routes[] = [
  { route: "/", element: Home },
  { route: "/movie", element: Movie },
  { route: "*", element: NotFound },
]

// Complete endPoint of API with api key
const API_MOST_POPULAR = `${import.meta.env.VITE_API}movie/popular?api_key=${import.meta.env.VITE_API_KEY_AUTH_V3}`

const API_MOVIE_DETAIL = `${import.meta.env.VITE_API}movie/id?api_key=${import.meta.env.VITE_API_KEY_AUTH_V3}`

// That´s the base url of movies films
const IMG_URI = "https://image.tmdb.org/t/p/w220_and_h330_face/"

// It´s the number provided by the API
const TOTAL_PAGES = 500

export { API_MOST_POPULAR, API_MOVIE_DETAIL, IMG_URI, ROUTER, TOTAL_PAGES}
