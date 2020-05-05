import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export const state = () => ({
	data: [],
})

export const getters = {
	topFiveCountries(state){
		let countries = state.data.slice(0, 5).map((country) =>{
			return country;
		})
		return countries;
	},
}

export const mutations = {
	setData(state, data) {
		state.data = data;
	},
}

export const actions = {
	apiData({ commit }) {
		axios({
			method: "get", //you can set what request you want to be
			url: apiURL + "statistics",
			headers: {
				"x-rapidapi-host": "covid-193.p.rapidapi.com/",
				"x-rapidapi-key": rapidApiKey
			}
		}).then(response => { commit('setData', response.data.response) });

	},
}
