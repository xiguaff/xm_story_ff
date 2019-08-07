import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

//引入主页组件
import Index from './views/Index.vue'

//引入图书列表组件
import StoryList from './views/StoryList.vue'

//引入图书详情组件
import Details from './views/details.vue'

//引入用户注册页面组件
import reg from './views/reg.vue'

//引入用户登录页面组件
import Login from './views/UserLogin.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Index},     //为主页配置路径
    {path:'/list/:num',component:StoryList,props:true},     //为图书列表配置路径
    {path:'/detail/:lid',component:Details,props:true},     //为图书详情页配置路径
    {path:'/reg',component:reg},    //为用户注册页面配置路径
    {path:'/login',component:Login},    //为用户登录页面配置路径
  ]
})
