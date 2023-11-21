import { reactive } from "vue";

export const store = reactive({
  baseApiUrl: "https://api.themoviedb.org/3",
  baseUrlImages: "https://image.tmdb.org/t/p/w342",
  baseUrlTopMovies: "https://api.themoviedb.org/3/trending/movie/week",
  baseUrlTopSeries: "https://api.themoviedb.org/3/trending/tv/week",
  baseUrlMoviesGenres: "https://api.themoviedb.org/3/genre/movie/list",
  baseUrlSeriesGenres: "https://api.themoviedb.org/3/genre/tv/list",
  endpointSearch: {
    movies: "/search/movie",
    series: "/search/tv",
  },
  baseParams: {
    api_key: "0181d79ce4d74bc9c0a4277d5be97491",
    query: "",
  },
  error: "",
  user: "",
  loading: true,
  filmsList: [],
  seriesList: [],
  filmsTopList: [],
  seriesTopList: [],
  filmsGenres: [],
  seriesGenres: [],
  variable: "",
  users: [
    { id: 1, img: "/images/alien.png", name: "User 1" },
    { id: 2, img: "/images/penguin.png", name: "User 2" },
  ],
});
