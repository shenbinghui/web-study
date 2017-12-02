// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './vuex/store'
import App from './App'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'


import 'element-ui/lib/theme-default/index.css'
import Element from 'element-ui'



Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Element);
Vue.use(VueAxios,axios);
Vue.use(Vuex);

router.beforeEach(function(to , from ,next){
	console.log(to.path);
	console.log(from.path);
	next();
});

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
