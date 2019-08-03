import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

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

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
