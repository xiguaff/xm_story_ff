import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


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
