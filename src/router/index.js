import Vue from 'vue'
import VueRouter from 'vue-router'
import demo from './demo'
import home from './home'
Vue.use(VueRouter)

// 所有路由信息
const routes = [
  ...demo,
  ...home
]

// 创建路由对象
const router =  new VueRouter({
  mode: 'history',
  routes
})

// 守卫函数
router.beforeEach((to, from, next) => {
  // 设置title
  document.title = to.meta.title || 'mall'
  console.log('to', to, 'from', from);
  // title 预加载 鉴权
  let isLogin = true
  if (!isLogin) next({ name: 'Login' })
  else next()
})
// 跳转后的处理逻辑
// 通常是处理 滚动位置 
router.afterEach((to) => {
  if (to.meta.scroll) {
    // 处理跳转到指定滚动位置
  }
  // ...
})
// 导出路由
export default router