<template>
  <div class="landingPageContainer" style="position: relative">
    <div class="box">
      <div style="display: flex; flex-direction: column; height: 100%">
        <div class="boxWithHeader">Apartmani <br />Vesna <br />Vir</div>
        <div class="outerMenuBox">
          <div class="innerMenuBox">
            <div v-motion-fade-visible>
              <div>
                <SelectButton
                  v-model="value"
                  :options="options"
                  aria-labelledby="basic"
                />
              </div>
              <div>
                <a @click="smoothScroll('aboutUs')"> {{ $t("ABOUT US") }}</a>
              </div>
              <div>
                <a @click="smoothScroll('prices')"> {{ $t("PRICES") }}</a>
              </div>
              <div>
                <a @click="smoothScroll('contact')">{{ $t("CONTACT") }}</a>
              </div>
              <Dropdown
                style="width: 80%; margin: 0 auto"
                v-model="selectedApartment"
                :options="translatedApartments"
                optionLabel="displayName"
                :placeholder="$t('CHOOSE APARTMENT')"
                @change="navigateToApartment"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box imageContainer"></div>

    <div class="showOnlyonsmallScreens">Apartmani Vesna Vir</div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      value: "EN",
      options: ["EN", "CRO"],
      selectedApartment: null,
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
    value(newValue, oldValue) {
      if (newValue == "EN") {
        this.value = "EN";
        this.switchLanguage("en");
      } else if (newValue == "CRO") {
        this.value = "CRO";
        this.switchLanguage("hr");
      } else {
        this.value = oldValue;
      }
    },
  },
  methods: {
    switchLanguage(value) {
      console.log("Selected value:", this.value);
      this.$i18n.locale = value;
    },
    smoothScroll(a) {
      const section = document.getElementById(a);
      if (section) {
        section.scrollIntoView(/* { behavior: "smooth" } */);
      }
    },
    navigateToApartment() {
      if (this.selectedApartment.id) {
        const apartmentId = this.selectedApartment.id;
        const section = document.getElementById(apartmentId);
        if (section) {
          section.scrollIntoView(/* { behavior: "smooth" } */);
        }
      }
    },
  },
};
</script>
<style SCOPED>
.p-button-label {
  color: #8daba8;
  /*  font-size: 1.5rem; */
  font-weight: 500;
}
.landingPageContainer {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
}
.box {
  /*  border: 1px solid red; */
  width: 100%;
  height: 100%;
}
.outerMenuBox {
  height: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  cursor: pointer;
}
.innerMenuBox {
  width: 80%;
  margin: 0 auto 0 auto;
  border-left: 2px solid #8daba8;
  padding-left: 1rem;
  color: #8daba8;
  font-size: 2rem;
  font-weight: 500;
}
.innerMenuBox a {
  color: inherit; /* Inherits color from parent (.innerMenuBox) */
  text-decoration: none;
}
.boxWithHeader {
  /*   border: 1px solid green; */
  width: 100%;
  height: 50%;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  font-family: "Lemon Tuesday";
  font-weight: bold;
  font-size: 4rem;
  color: #8daba8;
}
.imageContainer {
  background-image: url("/1.JPG");
  background-size: cover;
  background-position: center;
}
.showOnlyonsmallScreens {
  display: none;
  font-family: "Lemon Tuesday";
  font-weight: bold;
  font-size: 4rem;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
.p-inputtext {
  color: #8daba8 !important;
  font-family: "Open Sans", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0;
}
@media only screen and (max-width: 650px) {
  .landingPageContainer {
    flex-direction: column-reverse;
  }
  .innerMenuBox {
    font-size: 1.5rem;
  }
  .p-inputtext {
    font-size: 1rem;
    font-weight: 600;
    margin-left: 0;
    padding-left: 0;
    padding-right: 0;
    margin-right: 0;
  }
  .p-dropdown-trigger {
    width: 1.1rem;
  }
  .box {
    /*     border: 1px solid red; */
    height: 50%;
  }
  .boxWithHeader {
    display: none;
  }

  .showOnlyonsmallScreens {
    display: block;
    font-size: 3rem;
  }
  .outerMenuBox {
    height: 100%;
  }
}
</style>
