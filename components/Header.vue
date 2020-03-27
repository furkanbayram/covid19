<template>
  <b-navbar toggleable="lg">
    <b-navbar-brand class="text-white" href="#">COVID-19</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link class="active" to="/Graphs">Graphs</nuxt-link>
          <nuxt-link to="/Tables">Tables</nuxt-link>
        </li>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Header"
};
</script>


<style lang="scss" scoped>
.navbar {
  background-color: #2d466c;
  &-nav {
    li {
      a {
        color: #ffffff;
        padding: 0 5px;
      }
    }
  }
}
.active {
  color: #e95c36 !important;
	border-bottom: 2px solid #ffffff;
}
</style>
