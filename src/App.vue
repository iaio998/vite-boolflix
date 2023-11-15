<script>
import { store } from "./data/store";
import axios from "axios";
import Component_1Header from "./components/Component_1Header.vue";
import Component_2Main from "./components/Component_2Main.vue";

export default {
  name: "App",
  components: {
    Component_1Header,
    Component_2Main,
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

<template>
  <header>
    <Component_1Header class="bg-black" />
  </header>
  <main>
    <Component_2Main />
  </main>
</template>

<style scoped></style>
