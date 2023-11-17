<template>
  <h3 class="text-white px-5 py-2 m-0">TOP RATED MOVIES</h3>
  <div class="row flex-nowrap py-2">
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
  <h3 class="text-white px-5 py-2 m-0">TOP RATED SERIES</h3>
  <div class="row flex-nowrap py-2">
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
  },
};
</script>

<style lang="scss" scoped></style>
