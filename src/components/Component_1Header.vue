<template>
  <div class="god px-5 py-3">
    <div class="row justify-content-evenly align-items-center">
      <div class="col-2">
        <h1 class="fw-bold m-0">BOOLFLIX</h1>
      </div>
      <div class="col text-white">
        <ul class="d-flex p-0 m-0">
          <li class="fw-medium px-3 fs-5" v-for="el in menu">{{ el }}</li>
        </ul>
      </div>
      <div class="col-2">
        <SearchComponent @search="getSearched" />
      </div>
      <div class="col-1">
        <div class="user">
          <img
            :src="store.users[store.variable].img"
            :alt="store.users[store.variable].name"
          />
          <p class="user-name m-0">
            {{ store.users[store.variable].name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchComponent from "./sons/SearchComponent.vue";
import UserComponent from "./sons/UserComponent.vue";
import { store } from "../data/store";
import axios from "axios";
export default {
  name: "Component_1Header",
  components: {
    SearchComponent,
    UserComponent,
  },
  data() {
    return {
      store,
      menu: ["Home", "TV series", "Movies", "Recently added", "My list"],
    };
  },
  methods: {
    getApiMoviesAndSeries() {
      axios
        // films API
        .get(this.store.baseApiUrl + this.store.endpointSearch.movies, {
          params: this.store.baseParams,
        })
        .then((res) => {
          console.log(res.data.results);
          this.store.filmsList = res.data.results;
        });
      axios
        // movies API
        .get(this.store.baseApiUrl + this.store.endpointSearch.series, {
          params: this.store.baseParams,
        })
        .then((res) => {
          console.log(res.data.results);
          this.store.seriesList = res.data.results;
        });
    },
    getSearched(value) {
      if (value) {
        this.store.baseParams.query = value;
      } else {
        this.store.baseParams.query = "";
      }
      console.log(this.store.baseParams.query);
      this.getApiMoviesAndSeries();
    },
  },
  created() {
    this.getApiMoviesAndSeries();
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;
.god {
  background-color: rgba(0, 0, 0, 0.87);
  height: 95px;
  h1 {
    font-size: 3em;
    color: $color-red;
    position: relative;
  }
  li {
    color: grey;
    &:hover {
      text-shadow: 0 0 10px $color-grey-onhover, 0 0 30px white;
      color: $color-red;
      cursor: pointer;
    }
  }
}
img {
  width: 100%;
  border-radius: 50%;
}
.user {
  width: 50px;
  height: 50px;
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
  text-align: center;
  font-size: 0.8em;
  font-weight: bold;
  color: $color-white;
  bottom: -30px;
  right: 25px;
}
</style>
