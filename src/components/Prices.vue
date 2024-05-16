<template>
  <div class="apartmentComponentContainer">
    <ApartmentHeader header="PRICES" />
    <div class="scrollable-table">
      <table v-for="(apartment, index) in apartments" :key="index">
        <thead>
          <tr>
            <th colspan="2" style="text-align: center">
              {{ $t(apartment.name) }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(price, i) in apartment.prices" :key="i">
            <td style="width: 50%">{{ price.date }}</td>
            <td>{{ price.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
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
      apartments: [
        {
          name: "APARTMENT 1",
          header: "PRICES",
          prices: [
            { date: "01.06. - 30.06.", price: "60 EUR" },
            { date: "01.07. - 14.07.", price: "90 EUR" },
            { date: "15.07. - 14.08.", price: "100 EUR" },
            { date: "15.08. - 31.08.", price: "90 EUR" },
            { date: "01.09. - 30.09.", price: "60 EUR" },
          ],
        },
        {
          name: "APARTMENT 2",
          prices: [
            { date: "01.06. - 30.06.", price: "50 EUR" },
            { date: "01.07. - 14.07.", price: "50 EUR" },
            { date: "15.07. - 14.08.", price: "60 EUR" },
            { date: "15.08. - 31.08.", price: "50 EUR" },
            { date: "01.09. - 30.09.", price: "50 EUR" },
          ],
        },
        {
          name: "APARTMENT 3",
          prices: [
            { date: "01.06. - 30.06.", price: "50 EUR" },
            { date: "01.07. - 14.07.", price: "70 EUR" },
            { date: "15.07. - 14.08.", price: "70 EUR" },
            { date: "15.08. - 31.08.", price: "70 EUR" },
            { date: "01.09. - 30.09.", price: "50 EUR" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.apartmentComponentContainer {
  height: 100%;
  width: 90%;
  margin: 0 auto 0 auto;
  padding-top: 1.3rem; /* stavljeno kako bi header bio vidljiv na malim ekranima */
}
.scrollable-table {
  max-height: 80vh;
  overflow-y: auto;
}
table {
  width: 80%;
  border-collapse: collapse;
  border: 2px solid #000;
  margin: 1rem auto 0 auto;
}
th,
td {
  border: 1px solid #000;
  padding: 0.2rem;
  text-align: left;
}
th {
  background-color: #f2f2f2;
}
@media screen and (max-width: 650px) {
  table {
    margin-top: 0.5rem;
  }
  tr {
    display: flex;
    flex-wrap: wrap;
  }
  th,
  td {
    width: 50%;
    padding: 2px;
    font-size: 0.8rem; /* Reduced font size */
  }
  th[colspan="2"],
  td[colspan="2"] {
    width: 100%;
  }
}
</style>
