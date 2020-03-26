<template>
  <div class="totalData">
    <b-list-group>
      <b-list-group-item>
        <span>Toplam Vaka Sayısı: {{ totalData.totalCases }}</span>
      </b-list-group-item>
      <b-list-group-item>
        <span>Toplam Ölüm Sayısı: {{ totalData.totalDeaths }}</span>
      </b-list-group-item>
      <b-list-group-item>
        <span>Toplam İyileşen Sayısı: {{ totalData.totalRecovered }}</span>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      totalData: [],
      tatalDataURL: "https://api.collectapi.com/corona/totalData",
      authorization: "apikey 6HpOlVa4p18inuusD2Gnml:56mdDziNA0xP9RjOHIP5Ol"
    };
  },

  mounted() {
    this.getTotal();
  },

  methods: {
    getTotal() {
      axios({
        method: "get", //you can set what request you want to be
        url: this.tatalDataURL,
        headers: {
          Authorization: this.authorization
        }
      }).then(response => (this.totalData = response.data.result));
    }
  }
};
</script>


<style>
.totalData ul {
  list-style: none;
}

.totalData ul li {
  font-size: 20px;
  font-weight: 700;
  padding: 5px 15px;
}
</style>
