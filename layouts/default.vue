<template>
  <div class="covid" v-bind:class="$route.name">
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from "~/components/layout/Header.vue";

export default {
	name: "Default",
  components: {
    Header
  },

  data() {
    return {};
  }
};
</script>

<style>
.covid{
	height: 100vh;
}
</style>
