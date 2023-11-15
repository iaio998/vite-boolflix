<template>
  <div class="container">
    <SearchedFilms />
    <SearchedSeries />
  </div>
</template>

<script>
import { store } from "../data/store";
import CardComponent from "./sons/CardComponent.vue";
import SearchedFilms from "./sons/SearchedFilms.vue";
import SearchedSeries from "./sons/SearchedSeries.vue";
export default {
  name: "Component_2Main",
  components: {
    CardComponent,
    SearchedFilms,
    SearchedSeries,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
