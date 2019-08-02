import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

//引入主页组件
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Index},
  ]
})
