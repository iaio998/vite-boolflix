<template>
  <div class="col-1">
    <div class="user position-relative">
      <img :src="image" :alt="name" />
      <p class="user-name m-0 position-absolute">{{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserComponent",
  props: {
    image: String,
    name: String,
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/style/partials/variables" as *;
img {
  width: 100%;
  border-radius: 50%;
}
.user {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: $color-grey;
  border: 0.1px solid white;
  margin: 0 10px;
  transition: 0.5s ease;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
}
.user-name {
  font-size: 1.1em;
  font-weight: bold;
  color: $color-white;
  bottom: -30px;
  right: 25px;
}
</style>
