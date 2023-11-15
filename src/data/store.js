import { reactive } from "vue";

export const store = reactive({
  baseApiUrl: "https://api.themoviedb.org/3",
  endpointSearch: {
    movies: "/search/movie",
    series: "/search/tv",
  },
  baseParams: {
    api_key: "0181d79ce4d74bc9c0a4277d5be97491",
    query: "a",
  },
});
