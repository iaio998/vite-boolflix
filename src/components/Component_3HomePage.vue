<template>
  <div class="row py-2">
    <h3>TOP RATED</h3>
    <SliderComponent />
  </div>
</template>

<script>
import { store } from "../data/store";
import SliderComponent from "./sons/SliderComponent.vue";
export default {
  name: "Component_3HomePage",
  components: { SliderComponent },
  data() {
    return {
      store,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
