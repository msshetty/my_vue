import Vue from 'vue'
import App from './App.vue'

import router from './router.js'

import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios)

const Base_url = 'http://192.168.1.7'
// import Router from 'vue-router'
// Vue.use(Router)

// import Register from './components/register.vue'
// import Login from './components/login.vue'

// const router = new Router({
// 	mode: 'history',
// 	routes: [
// 		{ path: '/register', name: 'register', component: Register },
// 		{ path: '/login', name: 'login', component: Login }
// 	]
// });



// new Vue({
//   render: h => h(App),
// }).$mount('#app')

// const routes = [
//   { name: 'home', path: '/', component: HelloWorld },

//   { name: 'register', path: '/register', component: Register },
//   { name: 'login', path: '/login', component: Login }
  
// ];

// const router = new VueRouter({ mode: 'history', routes: routes});
 const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');