<template>
  <div class="graphs mt-3">
    <div class="container-fluid">
      <div class="row">
        <div class="left col-sm-8">
          <div class="row">
            <div class="col-sm-6">
              <div class="graph-container">
                <Bar />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="graph-container">
                <!-- <Linec /> -->
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="graph-container">
                <!-- <BarHorizontal /> -->
              </div>
            </div>
          </div>
        </div>
        <div class="right col-sm-4">
          <div class="graph-container">
            <Pie />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bar from "~/components/graphs/Bar.vue";
import BarHorizontal from "~/components/graphs/BarHorizontal.vue";

import Pie from "~/components/graphs/Pie.vue";
import Linec from "~/components/graphs/Linec.vue";

export default {
  name: "Graph",
  components: {
    Bar,
    BarHorizontal,
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
