import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入公共js文件
import common from './common.js'
//将js文件加入到vue原型链中
Vue.prototype.common=common

//引入element ui 组件
import Element from 'element-ui'
Vue.use(Element)
import 'element-ui/lib/theme-chalk/index.css'

//引入axios组件
import axios from 'axios'
import qs from 'qs'
//配置axios基础路径
axios.defaults.baseURL="http://127.0.0.1:1994/"
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=UTF-8'
//保存session的信息
axios.defaults.withCredentials=true
//将axios添加到vue原型对象中
Vue.prototype.axios=axios
Vue.prototype.qs=qs


//引入导航栏组件
import MyNav from './components/MyNav.vue'

//引入登录页面组件
import Login from './components/Login.vue'

//引入页面底部组件
import MyFooter from './components/MyFooter.vue'
//创建全局组件
Vue.component("my-nav",MyNav)
Vue.component("login",Login)
Vue.component("my-footer",MyFooter)
// 创建自定义指令
Vue.directive("focus",{
  inserted(e){
    e.focus();
  }
})


//设置每次组件跳转后 回到页面顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
