<template>
  <b-navbar toggleable="lg">
    <b-navbar-brand class="text-white" href="#">COVID-19</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <li>
          <nuxt-link to="/">World</nuxt-link>
          <nuxt-link to="/graphs">Graphs</nuxt-link>
          <nuxt-link to="/tables">Tables</nuxt-link>
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
	height: 12vh;
	max-height: 12vh;
  background-color: transparent;
  &-nav {
    li {
      a {
        color: #ffffff;
				padding: 0 5px;
				font-size: 22px;
      }
    }
  }
}
</style>
