<template>
  <div class="col-4">
    <div>
      <div class="img-cont"><img :src="image" :alt="name" /></div>
      <div class="txt-cont text-center py-2">
        <h5 class="fs-5">{{ name }}</h5>
        <h6>Original title: {{ originalName }}</h6>
        <div>Language: <img class="lang" :src="lang" :alt="lang" /></div>
        <p class="m-0">
          Rated:
          <span v-for="n in 5"
            ><i v-if="n <= vote" class="fa-solid fa-star"></i
            ><i v-else class="fa-regular fa-star"></i
          ></span>
        </p>
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
.img-cont {
  width: 350px;
  margin: 0 auto;
  img {
    width: 100%;
  }
}
.txt-cont {
  width: 75%;
  margin: 0 auto;
}
span {
  color: rgb(255, 230, 0);
}
</style>
