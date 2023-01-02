# React Engineer - Technical Assignment

## Installation
First of all you need an account in [TMDB](https://www.themoviedb.org/) and obtain your api key (V3). When you have it, take the **.env.example** file and rename it to **.env**, after copy your api key in *VITE_API_KEY*.
```text=
VITE_PORT= <any> (Ex: 3000)
VITE_API=https://api.themoviedb.org/3/
VITE_API_KEY_AUTH_V3= <your_api_key>
```
When you have it all, install all the dependencies:
```bash=
$npm install
```

If you **run npm run dev you** can see the project live!

## Requirements
The test will require building 2 different screens:

1. **Screen 1 - Movie List View**: The movies list based on the following [API](https://developers.themoviedb.org/3/movies/get-movie-details)
**Use Case**: As a not logged user, I want to see a paginated list of the most [popular movies](https://developers.themoviedb.org/3/movies/get-popular-movies), so I can know *the Title, Poster image, Release date and popularity of each movie*.
2. **Screen 2 - Movie Details View**:
**Use Case**: As a not logged user, I want to view details for a specific movie, so I can
see more details than in the *List view*.

### Other technical details:
-  Functional components
-  React router
-  Some state management logic (contexts, redux, whatever)
-  Implement the CSS using SASS or LESS

### What would be evaluated:
- Design
- Libraries used
- Quality of code and inline comments
- Use of the requirements on “other technical details” section

### Notes
- The assignment must be delivered via git repository, must contain several commits
- English might drive the development of the exercise, files, comments, classes, etc.