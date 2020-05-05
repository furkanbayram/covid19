<template>
  <div>
    <client-only>
      <Bar type="bar" :options="options" :series="series" />
    </client-only>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  components: {
		Bar: () => import('vue-apexcharts')
  },
  data() {
    return {
      options: {
				colors:['#F44336', '#34eba4', '#6e34eb'],
        chart: {
          id: "apex-wrapper"
        },
        xaxis: {
          categories: ''
        }
      },
      series: [
        {
          name: "Case",
          data: [124000, 160513, 79541, 97613]
				},
				{
          name: "Recover",
          data: [100000, 15654, 54313, 12356]
				},
				{
          name: "Death",
          data: [3531, 7572, 16707, 43213]
        }
      ]
		};
  },

  computed: {
		...mapState(["data"]),
		...mapGetters(["topFiveCountries"])
	},

	mounted() {
		this.apiData();
		let categories = this.topFiveCountries.map((country) => {
			return country;
		})

		console.log('test', this.topFiveCountries);
	},

  methods: {
		...mapActions(["apiData"])
	}
};
</script>
