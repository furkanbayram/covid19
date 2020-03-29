import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

const apiURL = "https://covid-193.p.rapidapi.com/";
const rapidApiKey = "4154a88902msh2ca5b7dca8755f0p1b256cjsnc06e2b045d91";


export const state = () => ({
	data: [],
})

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

	}
}

