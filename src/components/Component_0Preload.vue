<template>
  <div class="preload">
    <div class="container h-100">
      <div class="row align-items-end mb-3 h-50">
        <h1 id="title" class="col text-center m-0">BOOLFLIX</h1>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="col-1" v-for="(el, index) in users" :key="el.id">
          <div class="user position-relative" @click="store.user = el.name">
            <img :src="el.img" :alt="el.name" />
            <p class="user-name m-0 position-absolute">{{ el.name }}</p>
          </div>
        </div>
        <div class="col-1">
          <div id="add-new">
            <p class="m-0">+</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../data/store";
export default {
  name: "Component_0Preload",
  data() {
    return {
      store,
      users: [
        { id: 1, img: "/images/alien.png", name: "User 1" },
        { id: 2, img: "/images/penguin.png", name: "User 2" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;
img {
  width: 100%;
  border-radius: 50%;
}
.preload {
  width: 100%;
  height: 100vh;
  background-color: $color-black;
  #title {
    color: $color-red;
    font-size: 8em;
    font-weight: bold;
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

  #add-new {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: $color-grey;
    border: 0.1px solid white;
    margin: 0 10px;
    transition: 0.5s ease;
    &:hover {
      transform: scale(1.1);
      background-color: $color-grey-onhover;
      cursor: pointer;
    }
    &:hover p {
      color: $color-red;
      text-shadow: 0 0 10px $color-grey-onhover, 0 0 30px black;
      cursor: pointer;
    }
    p {
      font-size: 5em;
      color: $color-white;
      font-weight: bold;
      text-align: center;
      line-height: 80px;
    }
  }
}
</style>
