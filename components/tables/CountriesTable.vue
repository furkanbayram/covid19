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
      countriesData: [],
      apiURL: "https://covid-193.p.rapidapi.com/",
      rapidApiKey: "4154a88902msh2ca5b7dca8755f0p1b256cjsnc06e2b045d91"
    };
  },
  mounted() {
    this.getCountriesData();
  },

  methods: {
    getCountriesData() {
      // axios({
      //   method: "get", //you can set what request you want to be
      //   url: this.apiURL + "statistics",
      //   headers: {
      //     "x-rapidapi-host": "covid-193.p.rapidapi.com/",
      //     "x-rapidapi-key": this.rapidApiKey
      //   }
      // }).then(response => (this.countriesData = response.data.response));
    }
  }
};
</script>


<style lang="scss" scoped>
.countriesDataTable {
  .b-table-sticky-header {
    max-height: none;
  }
}
</style>
