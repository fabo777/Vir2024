<template lang="">
  <div v-lazy class="apartmentComponentContainer">
    <ApartmentHeader :header="header" />
    <div class="apartmentComponentSliderContainer">
      <Splide
        :options="{ rewind: true, arrows: true, pagination: true }"
        aria-label="Images"
      >
        <SplideSlide v-for="(image, index) in images" :key="index">
          <img
            :src="image.link"
            :alt="'Image ' + (index + 1)"
            style="width: 100%"
          />
        </SplideSlide>
      </Splide>
      <div v-motion-slide-visible-right>
        <div class="apartmentComponentTextArea">
          {{ $t(mainText) }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import ApartmentHeader from "./ApartmentHeader.vue";

export default {
  props: {
    header: {
      type: String,
      required: true,
    },
    mainText: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
  },
  components: {
    Splide,
    SplideSlide,
    ApartmentHeader,
  },
  data: function () {
    return {};
  },
};
</script>
<style>
img {
  object-fit: cover;
  height: 50vh;
  width: 100%;
}
.apartmentComponentContainer {
  height: 100%;
  width: 90%;
  margin: 0 auto 0 auto;
  padding-top: 1.3rem; /* stavljeno kako bi header bio vidljiv na malim ekranima */
}
.apartmentComponentSliderContainer {
  width: 80%;
  height: 90%;
  margin: 0 auto;
}
.apartmentComponentTextArea {
  font-size: 1.1rem;
  line-height: 1.3;
  max-height: 45vh;
  width: 90%;
  overflow-y: auto;
  margin: 1.2rem auto;
  color: #8daba8;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
}
/* @media (max-width: 400px) {
  .apartmentComponentTextArea {
    font-size: 0.7rem;
  }
} */
@media (max-width: 768px) {
  .apartmentComponentTextArea {
    font-size: 0.9rem;
    max-height: 55vh;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 30vh;
  }
}
</style>
