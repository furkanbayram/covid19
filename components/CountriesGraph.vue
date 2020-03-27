
	<template>
  <div class="gchart">
    <GChart type="ColumnChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
import axios from "axios";

export default {
  components: {
    GChart
  },
  data() {
    return {
      countriesData: [],
      apiURL: "https://covid-193.p.rapidapi.com/",
      rapidApiKey: "4154a88902msh2ca5b7dca8755f0p1b256cjsnc06e2b045d91",
      chartData: [
        ["Country", "Total", "Recover", "Death"],
        ["Chine", 110312, 88001, 64543],
        ["USA", 120312, 18460, 11250],
        ["Italy", 56910, 11220, 21300],
        ["Spain", 91030, 31540, 11350],
        ["Turkey", 81630, 13226, 53139]
      ],
      chartOptions: {
        title: "TOP 5 Country Data",
        height: "250",
        colors: ['blue', 'green', 'red']
      }
    };
  },

  mounted() {
    this.getData();
  },
  computed: {},
  methods: {
    getData() {
      axios({
        method: "get", //you can set what request you want to be
        url: this.apiURL + "statistics",
        headers: {
          "x-rapidapi-host": "covid-193.p.rapidapi.com/",
          "x-rapidapi-key": this.rapidApiKey
        }
      }).then(response => (this.countriesData = response.data.response));
    }
  }
};
</script>
