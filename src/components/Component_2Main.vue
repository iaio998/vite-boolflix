<template>
  <div id="main">
    <div class="container">
      <div>
        <SearchedFilms />
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../data/store";
import CardComponent from "./sons/CardComponent.vue";
import SearchedFilms from "./sons/SearchedFilms.vue";
export default {
  name: "Component_2Main",
  components: {
    CardComponent,
    SearchedFilms,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
#main {
}
</style>
