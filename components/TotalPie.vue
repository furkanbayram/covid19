<template>
  <div class="mt-2">
    <GChart type="PieChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import axios from "axios";
import { GChart } from "vue-google-charts";
export default {
  data() {
    return {
      totalData: [],
      tatalDataURL: "https://api.collectapi.com/corona/totalData",
      authorization: "apikey 6HpOlVa4p18inuusD2Gnml:56mdDziNA0xP9RjOHIP5Ol",
      chartData: [
        ["Task", "Hours per Day"],
        ["Total Ill", 153654],
        ["Total Recovered", 128701],
        ["Total Deaths", 24903]
      ],
      chartOptions: {
        chart: {
          title: "Total Data",
          width: "100%",
          colors: ["#e0440e", "#e6693e", "#ec8f6e"],
          is3D: true,
          pieHole: 0.4
        }
      }
    };
  },

  mounted() {
    this.getTotal();
  },

  methods: {
    getTotal() {
      axios({
        method: "get", //you can set what request you want to be
        url: this.tatalDataURL,
        headers: {
          Authorization: this.authorization
        }
      }).then(response => (this.totalData = response.data.result));
    }
  }
};
</script>
