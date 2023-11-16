<template>
  <div class="row g-3 py-2">
    <h3>SERIES</h3>
    <CardComponent
      v-for="(serie, index) in store.seriesList"
      :key="index"
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
