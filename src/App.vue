<script>
import { store } from "./data/store";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      store,
    };
  },
  methods: {
    getApiMoviesAndSeries() {
      axios
        // films API
        .get(this.store.baseApiUrl + this.store.endpointSearch.movies, {
          params: this.store.baseParams,
        })
        .then((res) => {
          console.log(res.data.results);
          this.store.filmsList = res.data.results;
        });
      axios
        // movies API
        .get(this.store.baseApiUrl + this.store.endpointSearch.series, {
          params: this.store.baseParams,
        })
        .then((res) => {
          console.log(res.data.results);
          this.store.seriesList = res.data.results;
        });
    },
  },
  created() {
    this.getApiMoviesAndSeries();
  },
};
</script>

<template></template>

<style scoped></style>
