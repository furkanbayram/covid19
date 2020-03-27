<template>
  <div class="content">
    <GeoChart />
  </div>
</template>

<script>
import GeoChart from "~/components/GeoChart.vue";

export default {
  name: "Home",
  components: {
    GeoChart
  },

  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.content {
  height: 85vh;
}
</style>
