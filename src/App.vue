<script>
import { store } from "./data/store";
import axios from "axios";
import Component_0Preload from "./components/Component_0Preload.vue";
import Component_1Header from "./components/Component_1Header.vue";
import CardComponent from "./components/sons/CardComponent.vue";
import Component_2Main from "./components/Component_2Main.vue";
import Component_3HomePage from "./components/Component_3HomePage.vue";

export default {
  name: "App",
  components: {
    Component_0Preload,
    Component_1Header,
    CardComponent,
    Component_2Main,
    Component_3HomePage,
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
    getApiTopRated() {
      axios
        // films API
        .get(this.store.baseUrlTopMovies, {
          params: this.store.baseParams,
        })
        .then((res) => {
          console.log(res.data.results);
          this.store.filmsTopList = res.data.results;
        });
      axios
        // movies API
        .get(this.store.baseUrlTopSeries, {
          params: this.store.baseParams,
        })
        .then((res) => {
          console.log(res.data.results);
          this.store.seriesTopList = res.data.results;
        });
    },
    langUp(val) {
      let langUpCase = val.toUpperCase();
      if (val === "en" || val === "uk") {
        return "GB";
      } else if (val === "ja") {
        return "JP";
      } else if (val === "ko") {
        return "KP";
      } else if (val === "hi") {
        return "IN";
      } else if (val === "zh") {
        return "CN";
      } else if (val === "da") {
        return "DK";
      } else if (val === "cs") {
        return "CZ";
      } else if (val === "el") {
        return "GR";
      } else {
        return langUpCase;
      }
    },
  },
  created() {
    this.getApiTopRated();
    this.getApiMoviesAndSeries();
  },
};
</script>

<template>
  <Component_0Preload v-if="store.user === ''" />
  <div v-else>
    <Component_1Header class="top" />
    <main>
      <div class="container-fluid" v-if="store.baseParams.query !== ''">
        <!-- PRINT MOVIES SEARCHED -->
        <h3 class="text-white px-5 py-2 m-0">MOVIES</h3>
        <div class="row g-2 py-2">
          <CardComponent
            v-for="(film, index) in store.filmsList"
            :key="film.id"
            :image="film.poster_path"
            :name="film.title"
            :originalName="film.original_title"
            :lang="
              'https://flagsapi.com/' +
              langUp(film.original_language) +
              '/flat/32.png'
            "
            :vote="Math.ceil(film.vote_average / 2)"
            :overview="film.overview"
          />
        </div>
        <!-- PRINT SERIES SEARCHED -->
        <h3 class="text-white px-5 py-2 m-0">SERIES</h3>
        <div class="row g-2 g-2 py-2">
          <CardComponent
            v-for="(serie, index) in store.seriesList"
            :key="serie.id"
            :image="serie.poster_path"
            :name="serie.name"
            :originalName="serie.original_name"
            :lang="
              'https://flagsapi.com/' +
              langUp(serie.original_language) +
              '/flat/32.png'
            "
            :vote="serie.vote_average"
            :overview="serie.overview"
          />
        </div>
      </div>
      <div class="container-fluid" v-else>
        <Component_3HomePage />
      </div>
    </main>
  </div>
  <!-- <Component_2Main /> -->
</template>

<style scoped>
.top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
main {
  margin-top: 95px;
}
</style>
