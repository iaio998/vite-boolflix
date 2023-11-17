import { reactive } from "vue";

export const store = reactive({
  baseApiUrl: "https://api.themoviedb.org/3",
  baseUrlImages: "https://image.tmdb.org/t/p/w342",
  baseUrlTopMovies: "https://api.themoviedb.org/3/trending/movie/week",
  baseUrlTopSeries: "https://api.themoviedb.org/3/trending/tv/week",
  endpointSearch: {
    movies: "/search/movie",
    series: "/search/tv",
  },
  baseParams: {
    api_key: "0181d79ce4d74bc9c0a4277d5be97491",
    query: "",
  },
  error: "",
  user: "s",
  loading: true,
  filmsList: [],
  seriesList: [],
  filmsTopList: [],
  seriesTopList: [],
});
