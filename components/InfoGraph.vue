
	<template>
  <div id="chart-container">
    <fusioncharts
      :type="type"
      :width="width"
      :height="height"
      :dataformat="dataFormat"
      :dataSource="dataSource"
    ></fusioncharts>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      countriesData: [],
      apiURL: "https://covid-193.p.rapidapi.com/",
      rapidApiKey: "4154a88902msh2ca5b7dca8755f0p1b256cjsnc06e2b045d91",
      type: "column2d",
      renderAt: "chart-container",
      width: "550",
      height: "350",
      dataFormat: "json",
      dataSource: {
        chart: {
          caption: "Countries With COVID-19]",
          subcaption: "COVID-19 People",
          xaxisname: "Country",
          yaxisname: "People",
          numbersuffix: "K",
          theme: "fusion"
        },
        data: [
          {
            label: "Venezuela",
            value: "290"
          },
          {
            label: "Saudi",
            value: "200"
          },
          {
            label: "China",
            value: "420"
          },
          {
            label: "Iran",
            value: "140"
          },
          {
            label: "Russia",
            value: "25"
          },
          {
            label: "UAE",
            value: "100"
          },
          {
            label: "US",
            value: "295"
          },
          {
            label: "China",
            value: "80"
          }
        ]
      }
    };
  },

  mounted() {
    this.getData();
  },
	computed: {
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
			}).then(response => (this.countriesData = response.data.response));
    }
  }
};
</script>
