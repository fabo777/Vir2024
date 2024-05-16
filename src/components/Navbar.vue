<template>
  <div class="navbar">
    <Dropdown
      style="border: none; outline: none"
      class="mainNavbar"
      v-model="localSelectedApartment"
      :options="translatedApartments"
      optionLabel="displayName"
      optionValue="id"
      :placeholder="$t('APARTMENTS')"
      @change="handleChange"
    />
    <a @click="smoothScroll('aboutUs')">{{ $t("ABOUT US") }}</a>
    <a @click="smoothScroll('prices')"> {{ $t("PRICES") }}</a>
    <a @click="smoothScroll('contact')">{{ $t("CONTACT") }}</a>
  </div>
</template>

<script>
export default {
  props: ["selectedApartment"],
  data: function () {
    return {
      // selectedApartment: null,
      localSelectedApartment: null,
      apartments: [
        { name: "APARTMENT 1", id: "apartman1" },
        { name: "APARTMENT 2", id: "apartman2" },
        { name: "APARTMENT 3", id: "apartman3" },
      ],
    };
  },

  computed: {
    translatedApartments() {
      return this.apartments.map((apartment) => ({
        id: apartment.id,
        displayName: this.$t(apartment.name),
      }));
    },
  },
  watch: {
    selectedApartment(newValue) {
      this.localSelectedApartment = newValue;
    },
  },
  methods: {
    handleChange(value) {
      this.$emit("update:selectedApartment", value);
    },
    smoothScroll(a) {
      const section = document.getElementById(a);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  color: #8daba8;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  font-family: "Open Sans", sans-serif;
  font-size: 0.9rem;
  cursor: pointer;
}

.navbar a {
  text-decoration: none;
  font-weight: bold;
  color: #8daba8;
  /* padding: 5px; */
}

.mainNavbar .p-inputtext {
  padding: 0 0 0 5px !important;
  color: #8daba8 !important;
  font-family: "Open Sans", sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
}
.p-dropdown-item {
  color: #8daba8 !important;
  font-family: "Open Sans", sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
}
@media screen and (max-width: 650px) {
  .navbar {
    font-size: 0.8rem !important;
  }
  .mainNavbar .p-inputtext {
    font-size: 0.8rem !important;
    padding: 0 0 0 5px !important;
    color: #8daba8 !important;
  }
}
</style>
