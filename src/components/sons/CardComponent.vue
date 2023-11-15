<template>
  <div class="col-4">
    <div>
      <div><img :src="image" :alt="name" /></div>
      <div class="text-center py-2">
        <h5>Title: {{ name }}</h5>
        <h6>Original title:{{ originalName }}</h6>
        <h6>Language: {{ lang }}</h6>
        <h6>Rated: {{ vote }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    image: String,
    name: String,
    originalName: String,
    lang: String,
    vote: Number,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
