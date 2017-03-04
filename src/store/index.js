import Vue from 'vue'
import vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import axios from 'axios'
Vue.use(vuex);

let list=[
		{ img: '../../../static/img/b1.jpg', flipped: false, name: 'm1',num:1},
		{ img: '../../../static/img/b2.jpg', flipped: false, name: 'm2',num:2 },
		{ img: '../../../static/img/b3.jpg', flipped: false, name: 'm3',num:3},
		{ img: '../../../static/img/b4.jpg', flipped: false, name: 'm4',num:4},
		{ img: '../../../static/img/b5.jpg', flipped: false, name: 'm5',num:5},
		{ img: '../../../static/img/b6.jpg', flipped: false, name: 'm6',num:6},
		{ img: '../../../static/img/b1.jpg', flipped: false, name: 'm1',num:7},
		{ img: '../../../static/img/b2.jpg', flipped: false, name: 'm2',num:8},
		{ img: '../../../static/img/b3.jpg', flipped: false, name: 'm3',num:9 },
		{ img: '../../../static/img/b4.jpg', flipped: false, name: 'm4',num:10 },
		{ img: '../../../static/img/b5.jpg', flipped: false, name: 'm5' ,num:11},
		{ img: '../../../static/img/b6.jpg', flipped: false, name: 'm6' ,num:12}
	]
const getters = {
	cards: (state) => {
//		let arr = [...state.list];
		for(let i = state.list.length - 1; i >= 0; i--) {
			let rand = Math.floor((i + 1) * Math.random());
			[state.list[rand], state.list[i]] = [state.list[i], state.list[rand]];
		}
		return state.list
	}
}

const state = {
	time: 0,
	status: 'READEY',
	list:list,
	unMached:6,
	rank:[],
	highestSpeed:'',
	isName:false
}

export default new vuex.Store({
	state,
	mutations,
	getters,
	actions
})