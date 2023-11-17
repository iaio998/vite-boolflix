<template>
  <div class="container">
    <div v-if="store.baseParams.query !== ''"></div>
    <Component_3HomePage v-else />
  </div>
</template>

<script>
import { store } from "../data/store";
import CardComponent from "./sons/CardComponent.vue";
import Component_3HomePage from "./Component_3HomePage.vue";
export default {
  name: "Component_2Main",
  components: {
    CardComponent,
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
