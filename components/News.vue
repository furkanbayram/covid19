<template>
  <div>
    <b-list-group>
      <b-list-group-item v-for="(news, index) in newsData" :key="index">{{ news.name }}</b-list-group-item>

    </b-list-group>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      newsData: null,
      newsDataURL: "https://api.collectapi.com/corona/coronaNews",
      authorization: "apikey 6HpOlVa4p18inuusD2Gnml:56mdDziNA0xP9RjOHIP5Ol"
    };
  },

  mounted() {
    this.getNews();
  },

  methods: {
    getNews() {
      axios({
        method: "get", //you can set what request you want to be
        url: this.newsDataURL,
        headers: {
          Authorization: this.authorization
        }
      }).then(response => (this.newsData = response.data.result));
    }
  }
};
</script>
