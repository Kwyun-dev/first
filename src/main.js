// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import Vuex from 'vuex'


Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
		allBook: '',

		bookName: '',
		author: '',
		tag: '',
		bookMsg: '',
		briefIntro: '',
		catalog: '',
		bookDiscuss: '',

		catalogIndex: '',
		catalogCon: '',
	},
	getters: {
		getName(state) {
			return state.bookName;
		},
		getAuthor(state) {
			return state.author
		},
		getTag(state) {
			return state.tag
		},
		getBookMsg(state) {
			return state.bookMsg
		},
		getBriefIntro(state) {
			return state.briefIntro
		},
		getCatalog(state) {
			return state.catalog
		},
		getBookDiscuss(state) {
			return state.bookDiscuss
		}
	},
	mutations: {
		setBookMes(state, data) {
			state.bookName = data.book_name;
			state.author = data.author;
			state.tag = data.tag;
			state.bookMsg = data.book_msg;
			state.briefIntro = data.brief_intro;
			state.catalog = data.catalog;
			state.bookDiscuss = data.book_discuss;
		}
	},
	actions: {
		setMess({commit}, data) {
			commit('setBookMes',data);
		},
	}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
