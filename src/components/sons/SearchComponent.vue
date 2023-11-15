<template>
  <div class="d-flex">
    <div class="input-group mx-2">
      <!-- <span class="input-group-text" id="inputGroup-sizing-default"
        >Default</span
      > -->
      <input
        v-model="this.text"
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />
    </div>
    <button
      type="button"
      class="btn btn-success"
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

<style lang="scss" scoped></style>
