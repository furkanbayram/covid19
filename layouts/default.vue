<template>
  <div class="layout">
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";

export default {
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
