<template>
  <div class="row g-3 py-2">
    <h3>MOVIES</h3>
    <CardComponent
      v-for="(film, index) in store.filmsList"
      :key="index"
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
</template>

<script>
import { store } from "../../data/store";
import CardComponent from "./CardComponent.vue";

export default {
  name: "SearchedFilms",
  components: {
    CardComponent,
  },
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
