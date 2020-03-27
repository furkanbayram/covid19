<template>
  <div class="graphs mt-3">
    <div class="container-fluid">
      <div class="row">
        <div class="left col-sm-8">
          <CountriesGraph />
					<GeoChart />
        </div>
				<div class="right col-sm-4">
          <Total />
					<TotalPie />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountriesGraph from "~/components/CountriesGraph.vue";
import GeoChart from "~/components/GeoChart.vue";
import Total from "~/components/Total.vue";
import TotalPie from "~/components/TotalPie.vue";


export default {
  components: {
		CountriesGraph,
		GeoChart,
		Total,
		TotalPie
  },

  data() {
    return {};
  }
};
</script>
