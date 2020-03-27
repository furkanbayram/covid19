<template>
  <div class="covid">
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";

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

</style>
