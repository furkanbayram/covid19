<template>
  <div>
    <GChart class="geo d-block" type="GeoChart" :data="chart" :options="chartOptions" />
  </div>
</template>

<script>
import axios from "axios";
import { GChart } from "vue-google-charts";

export default {
  data() {
    return {
      apiURL: "https://covid-193.p.rapidapi.com/",
      rapidApiKey: "4154a88902msh2ca5b7dca8755f0p1b256cjsnc06e2b045d91",
      header: [["Country", "Corona", "Death"]],

      chartData: [],
      chartOptions: {
        title: "Country Data",
        height: "100%",
        width: "100%",
        datalessRegionColor: "black",
        colorAxis: {
          minValue: 0,
					width: "100vh",
          colors: ["green", "#78ed18", "#eded18", "#ed9118", "#ed1818"]
        },

        backgroundColor: "#81d4fa"
      }
    };
  },

  asyncData() {},
  created() {
    this.getData();
  },

  computed: {
    chart: function() {
      return [...this.header, ...this.chartData];
    }
  },

  methods: {
    getData() {
      axios({
        method: "get", //you can set what request you want to be
        url: this.apiURL + "statistics",
        headers: {
          "x-rapidapi-host": "covid-193.p.rapidapi.com/",
          "x-rapidapi-key": this.rapidApiKey
        }
      }).then(
        response =>
          (this.chartData = response.data.response.map(data => {
            return [data.country, data.cases.total, data.deaths.total];
          }))
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.geo {
  max-height: 88vh;
  height: 88vh;
}
</style>
