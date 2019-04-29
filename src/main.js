import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from './components/Layout'



const router = new VueRouter({
  routes :[
    {name:'Layout',path:'/Layout',component:Layout}
  ]
})

// 配置路由


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
