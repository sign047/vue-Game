import Vue from 'vue'
import Router from 'vue-router'
import Game from '../Game'
import App from '../App'
Vue.use(Router)
const sign = resolve => require(['../components/sign/sign.vue'], resolve)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Game',
      component: Game
    },{
    	path:'/sign',
    	name:'sign',
    	component:sign
    }
  ]
})
