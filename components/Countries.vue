<template>
  <div class="countriesData">
    <div class="countriesDataTitle">
      <!-- <h1 class="text-center">Anlık Bilgi</h1> -->
    </div>
    <div class="countriesDataTable">
      <b-table sticky-header outlined head-variant hover :items="countriesData"></b-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      countriesData: null,
      countriesDataURL: "https://api.collectapi.com/corona/countriesData",
      authorization: "apikey 6HpOlVa4p18inuusD2Gnml:56mdDziNA0xP9RjOHIP5Ol"
    };
  },
  mounted() {
    this.getCountriesData();
  },

  methods: {
    getCountriesData() {
      axios({
        method: "get", //you can set what request you want to be
        url: this.countriesDataURL,
        headers: {
          Authorization: this.authorization
        }
      }).then(response => (this.countriesData = response.data.result));
    }
  }
};
</script>


<style>


.countriesDataTable .b-table-sticky-header {
  max-height: none;
}
</style>
