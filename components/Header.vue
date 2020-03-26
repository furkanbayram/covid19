<template>
    <b-navbar toggleable="lg">
      <b-navbar-brand href="#">COVID-19</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/news">News</nuxt-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
export default {
  name: "Header"
}

</script>


<style>
.navbar{
  background-color: #17b978;
}
.navbar .navbar-nav a{
  color: #ffffff;
  padding: 0 5px;
}
</style>
