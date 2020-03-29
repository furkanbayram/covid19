<template>
  <div class="totalData">
    <b-list-group>
      <b-list-group-item>
        <span>Total Number of Cases: {{ totalData.totalCases }}</span>
      </b-list-group-item>
      <b-list-group-item>
        <span>Toplam Number of Deaths: {{ totalData.totalDeaths }}</span>
      </b-list-group-item>
      <b-list-group-item>
        <span>Toplam Number of Recovered: {{ totalData.totalRecovered }}</span>
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


<style lang="scss" scope>
.totalData {
  ul {
    list-style: none;
    li {
      font-size: 20px;
      font-weight: 700;
      padding: 5px 15px;
    }
  }
}
</style>
