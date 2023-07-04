import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 导入 vuex模块
import a from '@/store/a.js'
import b from '@/store/b.js'
import c from '@/store/c.js'
export default new Vuex.Store({
  // 1.state：负责存储数据
  state: {
  },
  // 2.getters：state的计算属性 只有get方法
  getters: {

  },
  mutations: {
    // mutation名( state,payload ) { 修改state的数据 }
    // 载荷和函数参数的区别：载荷只能有一个
  },
  actions: {  
  },
  // 模块化处理vuex的数据
  modules: {
    // 模块名：{}
    // 挂载模块
    a,
    b,
    c
  }
})
