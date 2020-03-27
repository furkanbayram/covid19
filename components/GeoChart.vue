<template>
  <div>
    <GChart type="GeoChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import axios from "axios";
import { GChart } from "vue-google-charts";

export default {
  data() {
    return {
      chartData: [
        ["Country", "Corona", "Death"],
        ["Germany", 200, 50],
        ["United States", 300, 20],
        ["Brazil", 400, 50,],
        ["Canada", 500, 40],
        ["France", 600, 30],
        ["RU", 700, 5],
        ["Turkey", 10, 1]
      ],
      chartOptions: {
        title: "Country Data",
        width: "100%",
        colorAxis: { colors: ["#00853f", "#ffac41", "#e31b23"] },
        backgroundColor: "#81d4fa",
      }
    };
  }
};
</script>
