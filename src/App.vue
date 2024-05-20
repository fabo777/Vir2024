<template>
  <div style="width: 100%; background-color: #8daba8">
    <div class="container">
      <div class="section">
        <LandingPage
          :selectedApartment="selectedApartment"
          @update:selectedApartment="updateSelectedApartment"
        />
      </div>
      <Navbar
        :selectedApartment="selectedApartment"
        @update:selectedApartment="updateSelectedApartment"
      />

      <div
        v-for="(apartment, index) in apartments"
        :key="index"
        class="section"
        :id="apartment.id"
      >
        <ApartmentComponent
          :id="apartment.id"
          :header="apartment.name"
          :mainText="apartment.text"
          :images="getApartmentImages(apartment.pictures, index)"
        />
      </div>
      <div id="prices" class="section"><Prices /></div>
      <div id="contact" class="section"><Contact /></div>
    </div>
    <VuePreloader
      background-color="#091a28"
      color="#8daba8"
      transition-type="fade-up"
      :loading-speed="12"
      :transition-speed="1100"
      @loading-is-over="loadingIsOver"
      @transition-is-over="transitionIsOver"
    >
    </VuePreloader>
  </div>
</template>

<script>
import ApartmentComponent from "../src/components/ApartmentComponent.vue";
import Navbar from "../src/components/Navbar.vue";
import Prices from "../src/components/Prices.vue";
import apartmani from "./Data/apartmani.json";
import LandingPage from "./components/LandingPage.vue";
import Contact from "./components/Contact.vue";
import { VuePreloader } from "vue-preloader";
import "../node_modules/vue-preloader/dist/style.css";

export default {
  components: {
    ApartmentComponent,
    Navbar,
    Prices,
    LandingPage,
    Contact,
    VuePreloader,
  },
  data: function () {
    return {
      apartments: apartmani,
      selectedApartment: null,
    };
  },
  /*   mounted() {
    document.body.style.overflowX = "hidden"; // Ensure overflow-x is hidden initially
  }, */
  methods: {
    updateSelectedApartment(value) {
      this.selectedApartment = value.value;
      this.scrollToSection(this.selectedApartment);
    },
    getApartmentImages(pictures, index) {
      return pictures.map((pic) => ({ link: `/Apartman${index}/${pic}.jpg` }));
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(function () {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    },
    /*  loadingIsOver() {
      setTimeout(() => {
        document.body.style.overflowX = "hidden";
      }, 100);
    },
    transitionIsOver() {
      setTimeout(() => {
        document.body.style.overflowX = "hidden";
      }, 100);
    }, */
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  height: 700vh;
  width: 80%;
  margin: 0 auto;
}

.section {
  height: 100vh;
  display: flex;
  width: 100% !important;
  justify-content: center;
  align-items: center;
  background-color: white;
  text-align: center;
}

@media only screen and (max-width: 600px) {
  .container {
    width: 90%; /* Adjust width for smaller screens */
  }
}

@media only screen and (min-width: 601px) and (max-width: 900px) {
  .container {
    width: 85%; /* Adjust width for medium-sized screens */
  }
}

@media only screen and (min-width: 901px) and (max-width: 1200px) {
  .container {
    width: 75%; /* Adjust width for larger screens */
  }
}

@media only screen and (min-width: 1201px) {
  .container {
    width: 55%; /* Adjust width for extra-large screens */
  }
}
</style>
