<template>
  <div class="mt-2">
    <no-ssr>
      <Pie type="donut" :options="options" :series="series" />
    </no-ssr>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  components: {
    Pie: () => import("vue-apexcharts")
  },
  data() {
    return {
      totalData: [],
      options: {},
      series: [44, 55, 41, 17, 15]
    };
  },

  computed: {
    ...mapState(["data"]),

    mapData: function() {
      let data = this.data.map(country => {
        return country.cases.total;
      });
      var sum = 0;
      for (var i = 0; i < data.length; i++) {
        sum += data[i];
      }
      return sum;
    }
  },

  mounted() {
    this.apiData();
  },

  methods: {
    ...mapActions(["apiData"])
  }
};
</script>
