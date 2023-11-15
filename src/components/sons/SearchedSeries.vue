<template>
  <div class="row g-3 py-2">
    <!-- <h3>SERIES</h3> -->
    <CardComponent
      v-for="(serie, index) in store.seriesList"
      :key="index"
      :image="store.baseUrlImages + serie.poster_path"
      :name="serie.name"
      :originalName="serie.original_name"
      :lang="serie.original_language"
      :vote="serie.vote_average"
    />
  </div>
</template>

<script>
import { store } from "../../data/store";
import CardComponent from "./CardComponent.vue";

export default {
  name: "SearchedSeries",
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
