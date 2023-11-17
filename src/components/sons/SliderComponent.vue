<template>
  <!-- <CardComponent
      v-for="(film, index) in store.filmsTopList"
      :key="film.id"
      :image="store.baseUrlImages + film.poster_path"
      :name="film.title"
      :originalName="film.original_title"
      :lang="
        'https://flagsapi.com/' +
        langUp(film.original_language) +
        '/flat/32.png'
      "
      :vote="Math.ceil(film.vote_average / 2)"
      :overview="film.overview"
    /> -->
  <div class="col p-1">
    <div class="box">
      <div class="box-inner">
        <div class="box-front">
          <div class="img-cont">
            <img :src="image" :alt="name" />
          </div>
        </div>
        <div class="box-back bg-black">
          <div class="txt-cont text-center py-4">
            <h5 class="fs-5">{{ name }}</h5>
            <h6>Original title: {{ originalName }}</h6>
            <div>Language: <img class="lang" :src="lang" :alt="lang" /></div>
            <p class="m-1">
              Rated:
              <span v-for="n in 5"
                ><i v-if="n <= vote" class="fa-solid fa-star"></i
                ><i v-else class="fa-regular fa-star"></i
              ></span>
            </p>
            <p v-if="overview !== ''" class="my-overview py-1 m-0">
              Overview: {{ overview }}
            </p>
            <p v-else class="my-overview py-1 m-0">Overview: No description.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../../data/store";
export default {
  name: "SliderComponent",
  components: {},
  props: {
    image: String,
    name: String,
    originalName: String,
    lang: String,
    vote: Number,
    overview: String,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    // langUp(val) {
    //   let langUpCase = val.toUpperCase();
    //   if (val === "en" || val === "uk") {
    //     return "GB";
    //   } else if (val === "ja") {
    //     return "JP";
    //   } else if (val === "ko") {
    //     return "KP";
    //   } else if (val === "hi") {
    //     return "IN";
    //   } else if (val === "zh") {
    //     return "CN";
    //   } else {
    //     return langUpCase;
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/style/partials/variables" as *;
.box {
  background-color: transparent;
  width: 350px;
  height: 525px;
  border: 1px solid $color-black;
  perspective: 1000px;
  overflow: hidden;

  &:hover .box-inner {
    transform: rotateY(180deg);
  }
  .box-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.4s;
    transform-style: preserve-3d;
    .box-front {
      background-color: transparent;
      color: #111111;
      img {
        width: 100%;
        height: 525px;
      }
    }
    .box-back {
      width: 350px;
      height: 525px;
      margin: 0 auto;
      background-color: #8ebf42;
      color: #eeeeee;
      // position: fixed;
      // top: 0;
      transform: rotateY(180deg);
      .txt-cont {
        width: 75%;
        height: 100%;
        margin: 0 auto;

        span {
          color: rgb(255, 230, 0);
        }
        .my-overview {
          width: 100%;
          height: 60%;
          overflow-y: auto;
          text-align: justify;
        }
        .my-overview::-webkit-scrollbar {
          display: none;
        }
      }
    }
    .box-front,
    .box-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
    }
  }
}
</style>
