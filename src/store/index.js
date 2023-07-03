import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      name: 'ikun',
      age: 30
    },
    settingInfo: {
      color: 'red',
      fontSize: '20px'
    },
    count: 5
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
