import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './utils/request'
import './vant'
import 'amfe-flexible'

Vue.config.productionTip = false
// 将axios方法挂在到vue 原型上
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
