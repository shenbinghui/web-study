// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

/*http*/
import axios from 'axios'
import VueAxios from 'vue-axios'

/*elelment ui*/
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App'
import router from './router'


import vueXlsxTable from 'vue-xlsx-table'




//使用require  ==  module.exports  nodejs模块化大量使用
// const utils = require('./utils');
// alert(utils.name);

//使用import  export (default)  es6新语法，前端使用需要工具转
// import Utils from './utils'
// alert(Utils.name);


Vue.use(Element);
Vue.use(vueXlsxTable, {rABS: false});

Vue.config.productionTip = false;
// axios.defaults.baseURL = '/api';
Vue.prototype.rootUrl = '/agent/';

Vue.use(VueAxios,axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
