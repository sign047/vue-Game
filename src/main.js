// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import App from './App'
import router from './router'
import store from'./store/index'
import '../static/css/reset.css'
import Vue from 'vue'
//import axios from 'axios'
//import VueAxios from 'vue-axios'
//
//Vue.use(VueAxios, axios)
/* eslint-disable no-new */

//Vue.http.interceptors.push({  //拦截添加loading 函数
//request (request) {
//  updateAjaxAnimation(store, 'fadeIn')
//  return request
//},
//response (reponse) {
//  setTimeout(() => {
//    updateAjaxAnimation(store, 'fadeOut')
//  }, 750)
//  return reponse
//}
//})


new Vue({
  el: '#app',
  store,
  router,
render: h => h(App)
})
