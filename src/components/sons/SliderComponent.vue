<template>
  <div class="col-12">
    <div class="carousel">
      <div class="inner">
        <!-- <div class="card" v-for="card in cards" :key="">
          {{ card }}
        </div> -->
        <CardComponent class="card" />
      </div>
    </div>
    <button>prev</button>
    <button>next</button>
  </div>
</template>

<script>
import CardComponent from "./CardComponent.vue";
import { store } from "../../data/store";
export default {
  name: "SliderComponent",
  components: { CardComponent },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  width: 170px; /* ❶ */
  overflow: hidden; /* ❷ */
}

.inner {
  white-space: nowrap; /* ❸ */
}

.card {
  width: 40px;
  margin-right: 10px;
  display: inline-flex;

  /* optional */
  height: 40px;
  background-color: #39b1bd;
  color: white;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}

/* optional */
button {
  margin-right: 5px;
  margin-top: 10px;
}
</style>
