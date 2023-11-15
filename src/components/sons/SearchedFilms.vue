<template>
  <div class="row">
    <!-- <h3>MOVIES</h3> -->
    <CardComponent
      v-for="(film, index) in store.filmsList"
      :key="index"
      :image="store.baseUrlImages + film.poster_path"
      :name="film.name"
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
