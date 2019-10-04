import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      log:null,
      url:"http://127.0.0.1:1994/",
      uname:sessionStorage.getItem("uname"),
      arr:[1,18,11,33,34,1],
      list:[],
      search:"",
  },
  mutations: {
    // setLog(state){
    //   console.log(state.log)
    //   state.log = 1;
    // }
  },
  getters:{
    // getUname(state){
    //   return state.uname
    // }
  },
  actions: {

  }
})
