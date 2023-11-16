<template>
  <div class="container">
    <div v-if="store.baseParams.query !== ''">
      <SearchedFilms />
      <SearchedSeries />
    </div>
    <Component_3HomePage v-else />
  </div>
</template>

<script>
import { store } from "../data/store";
import CardComponent from "./sons/CardComponent.vue";
import SearchedFilms from "./sons/SearchedFilms.vue";
import SearchedSeries from "./sons/SearchedSeries.vue";
import Component_3HomePage from "./Component_3HomePage.vue";
export default {
  name: "Component_2Main",
  components: {
    CardComponent,
    SearchedFilms,
    SearchedSeries,
    Component_3HomePage,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
