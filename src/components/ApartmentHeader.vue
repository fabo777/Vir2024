<template lang="">
  <div>
    <div class="apartmenNameContatiner">
      <div v-motion-slide-visible-left>
        <div class="logo">Apartmani Vesna</div>
      </div>
      <div class="apartmentName">{{ $t(header) }}</div>
    </div>
    <hr class="hrStyle" />
  </div>
</template>
<script>
export default {
  props: {
    header: {
      type: String,
      required: true,
    },
  },
};
</script>
<style>
.apartmenNameContatiner {
  display: grid;
  grid-template-columns: 1fr 7fr 1fr;
  align-items: center;
}
@media only screen and (max-width: 768px) {
  .apartmenNameContatiner {
    grid-template-columns: 1fr 7fr 2fr;
  }
}
.logo {
  text-align: center;
  font-size: 1.5rem;
  font-family: "Lemon Tuesday";
  font-weight: bold;
}
.apartmentName {
  text-align: center;
  font-size: 24px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
}
.hrStyle {
  width: 80%;
  text-align: left;
  margin: 0 auto;
  margin-bottom: 1rem;
}
/* Small screens */
@media screen and (min-width: 320px) and (max-width: 767px) {
  .logo {
    font-size: 0.7rem !important; /* Adjust font size for small screens */
  }
  .apartmentName {
    font-size: 14px !important; /* Adjust font size for small screens */
  }
}

/* Medium screens */
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .logo {
    font-size: 1.2rem; /* Adjust font size for medium screens */
  }
  .apartmentName {
    font-size: 22px; /* Adjust font size for medium screens */
  }
}

/* Large screens */
@media screen and (min-width: 1024px) {
  .logo {
    font-size: 1.5rem; /* Adjust font size for large screens */
  }
  .apartmentName {
    font-size: 24px; /* Adjust font size for large screens */
  }
}
</style>
