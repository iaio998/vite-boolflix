<template>
  <div class="d-flex">
    <div class="input-group mx-2">
      <!-- <span class="input-group-text" id="inputGroup-sizing-default"
        >Default</span
      > -->
      <input
        placeholder="Movie, serie..."
        v-model="this.text"
        type="text"
        class="form-control rounded-1 p-0"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />
    </div>
    <button
      type="button"
      class="rounded-2 fs-bold"
      @click="$emit('search', this.text)"
    >
      Search
    </button>
  </div>
</template>

<script>
import { store } from "../../data/store";
export default {
  name: "SearchComponent",
  data() {
    return {
      store,
      text: "",
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@use "../../assets/style/partials/variables" as *;
button {
  background-color: $color-red;
  color: $color-white;
  border: 0;
  &:hover {
    background-color: $color-red-onhover;
  }
}
</style>
