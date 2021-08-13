import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import createPersistedState from 'vuex-persistedstate'
import a from './a'
import b from './b'
import * as types from './types'

Vue.use(Vuex)
// 模块化state
const modules = {
  moduleA: a, // 在页面中使用时 需要通过key 映射到this实例上
  b
}

// 初始化state对象
const inistStore = {
  state: {
    count1: 0,
    globalInfo: {
      user: {
        name: 'leo',
        age: 11
      }
    }
  },
  mutations: { // 只能同步
    increment (state) {
      state.count1++
    },
    increment1 (state, payload) {
      state.count1 += payload
    },
    // count 减一
    [types.DEINCREASE](state) {
      state.count1--
    }
  },
  actions: { // 处理异步 ajax请求 文件流等
    // 异步更新state 数据
    syncIncrement(store, payload) {
      const { commit } = store
      console.log('payload', payload)
      setTimeout(() => {
        commit('increment1', 2)
      }, 2000)
    }
  },
  modules,
  plugins: [
    createPersistedState({
      key: '$vuex'
    }),
    createLogger()
  ],
}

//  创建store
const store = new Vuex.Store(inistStore)


// 导出
export default store

