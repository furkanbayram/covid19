<template>
  <div class="graphs mt-3">
    <div class="container-fluid">
      <div class="row">
        <div class="left col-sm-8">
          <div class="row">
            <div class="col-sm-6">
              <Bar />
            </div>
            <div class="col-sm-6">
              <Linec />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <BarHorizontal />
            </div>
          </div>
        </div>
        <div class="right col-sm-4">
          <Pie />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bar from "~/components/graphs/Bar.vue";
import BarHorizontal from "~/components/graphs/BarHorizontal.vue";

import CountriesGraph from "~/components/graphs/CountriesGraph.vue";
import Total from "~/components/tables/Total.vue";
import Pie from "~/components/graphs/Pie.vue";
import Linec from "~/components/graphs/Linec.vue";

export default {
  name: "Graph",
  components: {
    Bar,
    BarHorizontal,
    CountriesGraph,
    Total,
    Pie,
    Linec
  },

  data() {
    return {};
  }
};
</script>

<style lang="scss">
body {
}
</style>
