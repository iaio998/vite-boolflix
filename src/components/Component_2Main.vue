<template>
  <div id="main">
    <div class="container">
      <div></div>
    </div>
  </div>
</template>

<script>
import { store } from "../data/store";
import CardComponent from "./sons/CardComponent.vue";
export default {
  name: "Component_2Main",
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

<style lang="scss" scoped>
#main {
}
</style>
