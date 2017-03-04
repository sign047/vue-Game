import Vue from 'vue'
import axios from 'axios'
let timer,
	statusHandler = {
		PLAYING(commit) {
			timer = setInterval(function() {
				commit('counting');
			}, 1000);
		},
		PASS(commit) {
			clearInterval(timer);
			rank('/data/rank').then( (data) =>{
				commit('updateHighestSpeed',data);
			})
		}
	};

function rank(url,params={}) {
	return axios.post(url,params)
		.then(res => res.data.data)
		.catch((err) => {
			alert(err)
		})
}
export default {
	updateStatus({ commit }, status) {
		commit('updateStatus', status);
		statusHandler[status] && statusHandler[status](commit);
	},
	flip({ commit }, card) {
		commit('flip', card);
	},
	match({ commit }) {
		commit('match')
	},
	back({ commit }, data) {
		commit('back', data);
	},
	getRank({ commit }, url) {
		
		 rank(url).then((data) => {
			commit('getRank',data);
		})
	},
	setRank({ commit }, url,params) {
		
		 rank(url,params).then((data) => {
		 	
			commit('getRank',data);
		})
	},
	showName({commit}){
		commit('showName');
	},
	updateHighestSpeed({commit}){
		commit('updateHighestSpeed');
	}

}


