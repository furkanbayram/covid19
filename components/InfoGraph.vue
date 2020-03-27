
	<template>
  <div class="test" id="chart-container">
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
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
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
