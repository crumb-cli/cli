//
const moduleA = {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    // 计数器自增
    increasement(state) {
      state.count++
    }
  },
  actions: {}
}

export default moduleA