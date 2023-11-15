<template>
  <div class="px-5">
    <div class="row justify-content-evenly align-items-center">
      <div class="col">
        <h1>BOOLFLIX</h1>
      </div>
      <div class="col">
        <SearchComponent />
      </div>
    </div>
  </div>
</template>

<script>
import SearchComponent from "./sons/SearchComponent.vue";
export default {
  name: "Component_1Header",
  components: {
    SearchComponent,
  },
};
</script>

<style lang="scss" scoped></style>
