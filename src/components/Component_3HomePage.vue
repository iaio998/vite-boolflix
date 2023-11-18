<template>
  <div class="d-flex align-items-center justify-content-between">
    <h3 class="text-white px-5 py-2 m-0">TOP RATED MOVIES</h3>
    <div class="px-5">
      <i
        class="fa-solid fa-arrow-left px-2 py-1 mx-1 fs-3"
        @click="scrollMovieLeft(0, -300)"
      ></i>
      <i
        class="fa-solid fa-arrow-right px-2 py-1 mx-1 fs-3"
        @click="scrollMovieRight(0, 300)"
      ></i>
    </div>
  </div>
  <div class="row overflow-hidden flex-nowrap py-2" ref="sliderTopMovies">
    <SliderComponent
      v-for="(film, index) in store.filmsTopList"
      :key="film.id"
      :image="store.baseUrlImages + film.poster_path"
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
  <div class="d-flex align-items-center justify-content-between">
    <h3 class="text-white px-5 py-2 m-0">TOP RATED SERIES</h3>
    <div class="px-5">
      <i
        class="fa-solid fa-arrow-left px-2 py-1 mx-1 fs-3"
        @click="scrollSerieLeft(0, -300)"
      ></i>
      <i
        class="fa-solid fa-arrow-right px-2 py-1 mx-1 fs-3"
        @click="scrollSerieRight(0, 300)"
      ></i>
    </div>
  </div>
  <div class="row overflow-hidden flex-nowrap py-2" ref="sliderTopSeries">
    <SliderComponent
      v-for="(serie, index) in store.seriesTopList"
      :key="serie.id"
      :image="store.baseUrlImages + serie.poster_path"
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
</template>

<script>
import { store } from "../data/store";
import SliderComponent from "./sons/SliderComponent.vue";
export default {
  name: "Component_3HomePage",
  components: { SliderComponent },
  data() {
    return {
      store,
    };
  },
  methods: {
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
      } else {
        return langUpCase;
      }
    },
    scrollMovieLeft(y, x) {
      let slider = this.$refs.sliderTopMovies;
      slider.scrollBy({
        top: y,
        left: x,
        behavior: "smooth",
      });
    },
    scrollMovieRight(y, x) {
      let slider = this.$refs.sliderTopMovies;
      slider.scrollBy({
        top: y,
        left: x,
        behavior: "smooth",
      });
    },
    scrollSerieLeft(y, x) {
      let slider = this.$refs.sliderTopSeries;
      slider.scrollBy({
        top: y,
        left: x,
        behavior: "smooth",
      });
    },
    scrollSerieRight(y, x) {
      let slider = this.$refs.sliderTopSeries;
      slider.scrollBy({
        top: y,
        left: x,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;
.arrows {
  margin: 0 auto;
}
.fa-solid {
  background-color: rgba(128, 128, 128, 0.247);
  border-radius: 10%;
  color: $color-white;

  &:hover {
    background-color: $color-grey-onhover;
    text-shadow: 0 0 10px $color-grey-onhover, 0 0 30px white;
    color: $color-red;
    cursor: pointer;
  }
}
</style>
