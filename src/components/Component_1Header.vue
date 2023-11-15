<template>
  <div class="px-5 py-3">
    <div class="row justify-content-evenly align-items-center">
      <div class="col">
        <h1 class="text-danger">BOOLFLIX</h1>
      </div>
      <div class="col d-flex justify-content-end">
        <SearchComponent @search="getSearched" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchComponent from "./sons/SearchComponent.vue";
import { store } from "../data/store";
import axios from "axios";
export default {
  name: "Component_1Header",
  components: {
    SearchComponent,
  },
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
          this.store.filmsList = res.data.results;
        });
      axios
        // movies API
        .get(this.store.baseApiUrl + this.store.endpointSearch.series, {
          params: this.store.baseParams,
        })
        .then((res) => {
          this.store.seriesList = res.data.results;
        });
    },
    getSearched(value) {
      if (value) {
        this.store.baseParams.query = value;
      } else {
        this.store.baseParams.query = "";
      }
      console.log(this.store.baseParams.query);
      this.getApiMoviesAndSeries();
    },
  },
  created() {
    this.getApiMoviesAndSeries();
  },
};
</script>

<style lang="scss" scoped></style>
