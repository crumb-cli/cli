import Home from '../pages/home'
import Login from '../pages/login'

export default [
  { // 首页
    path: '/',
    name: 'Home',
    meta: {
      title: '首页'
    },
    component: Home
  },
  {// 登录
    path: '/login',
    name: 'Login',
    meta: {
      title: '用户登录'
    },
    component: Login
  }
]