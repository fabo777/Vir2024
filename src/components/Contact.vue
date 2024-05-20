<template>
  <div class="apartmentComponentContainer">
    <div><ApartmentHeader header="CONTACT" /></div>
    <div>
      <div class="scrollable-table">
        <table>
          <tbody>
            <tr v-for="(row, i) in info" :key="i">
              <td>
                <img
                  class="icons"
                  :src="row.icon"
                  :alt="'Image ' + (index + 1)"
                  style="
                    width: 16px !important;
                    height: 16px !important;
                    filter: invert(80%) sepia(7%) saturate(747%)
                      hue-rotate(125deg) brightness(82%) contrast(84%);
                  "
                />
              </td>

              <td v-html="$t(row.text)"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <Image alt="Image" preview>
      <template #indicatoricon>
        <i class="pi pi-search"></i>
      </template>
      <template #image>
        <img src="/Karta.png" alt="image" width="250" />
      </template>
      <template #preview="slotProps">
        <img
          src="/Karta.png"
          alt="preview"
          :style="slotProps.style"
          @click="slotProps.onClick && this.openMaps()"
        />
      </template>
    </Image>
  </div>
</template>
<script>
import ApartmentHeader from "./ApartmentHeader.vue";
export default {
  components: {
    ApartmentHeader,
  },
  data() {
    return {
      info: [
        {
          icon: "Icons/home.png",
          text: "Address: XXVIII Miljkovica 9, 23234 Vir, Croatia",
        },
        { icon: "Icons/user.png", text: "Owner: Željko Jerbić" },
        {
          icon: "Icons/telephone.png",
          text: "Phone: +385 99 3731 515 (Petra)",
        },
        {
          icon: "Icons/facebook.png",

          text: '<a style="color:#8daba8" href="https://facebook.com/apartmanivesnavir/" target="_blank">Facebook</a>',
        },
        {
          icon: "Icons/email.png",
          text: "E-mail: <a style='color:#8daba8' href='mailto:petra.jerbic2612@gmail.com'>petra.jerbic2612@gmail.com</a>",
        },
      ],
    };
  },
  methods: {
    openMaps() {
      window.open("https://goo.gl/maps/JkGWwdmofrwLNkeJ6", "_blank");
    },
  },
};
</script>
<style scoped>
.apartmentComponentContainer {
  height: 100%;
  width: 90% !important;
  margin: 0 auto;
  padding-top: 1.3rem; /* stavljeno kako bi header bio vidljiv na malim ekranima */
}

.scrollable-table {
  width: 100% !important;
  max-height: 80vh;
  overflow-y: auto;
}
table {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
  border: none;
  margin-top: 1rem;
  font-weight: 500;
  color: #8daba8;
}

th,
td {
  border: none;
  padding: 0.2rem;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

tr {
  display: grid;
  grid-template-columns: 10% 1fr; /* First column 15%, Second column takes the remaining space */
}

@media screen and (max-width: 650px) {
  table {
    margin-top: 0.5rem;
    width: 85%;
  }
  tr {
    display: flex;
    flex-wrap: wrap;
  }
  th,
  td {
    padding: 2px;
    font-size: 0.6rem;
  }
  .icons {
    height: 16px !important;
    width: 16px !important;
  }
}
</style>
