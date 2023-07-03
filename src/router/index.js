import Vue from 'vue'
import VueRouter from 'vue-router'

// 1.导入组件
import home from '@/views/home.vue'
import setting from '@/views/setting.vue'
import shopcar from '@/views/shopcar.vue'
import user from '@/views/user.vue'
Vue.use(VueRouter)

// 2.路由规则
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: home },
  { path: '/setting', component: setting },
  { path: '/shopcar', component: shopcar },
  { path: '/user', component: user }
]

const router = new VueRouter({
  routes
})

export default router
