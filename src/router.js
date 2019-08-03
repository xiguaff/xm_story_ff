import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

//引入主页组件
import Index from './views/Index.vue'
import StoryList from './views/StoryList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Index},
    {path:'/list/:num',component:StoryList,props:true},
  ]
})
