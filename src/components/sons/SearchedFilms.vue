<template>
  <div class="row g-3 py-2">
    <!-- <h3>MOVIES</h3> -->
    <CardComponent
      v-for="(film, index) in store.filmsList"
      :key="index"
      :image="store.baseUrlImages + film.poster_path"
      :name="film.title"
      :originalName="film.original_title"
      :lang="film.original_language"
      :vote="film.vote_average"
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
};
</script>

<style lang="scss" scoped></style>
