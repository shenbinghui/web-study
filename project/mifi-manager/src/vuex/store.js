import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const state = {
	test:'testaaaa'
}

const mutations = {
	getTest(){
		alert(state.test);
	},
	setTest(data){
		state.test = data;
	}
}

export default new Vuex.Store({
	state,
	mutations
});