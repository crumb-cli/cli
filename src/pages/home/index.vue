<template>
  <div class="home-wrap">
    home page
    <br />
    <br />
    <br />
    <div class="count-wrap">count: {{ aInfo.count }}</div>
    <br />
    <van-button type="primary" @click="increasement">增加</van-button>
    <br /><br />
    <div class="count-wrap">count1: {{ count1 }}</div>
    <br />
    <van-button type="primary" @click="add">增加</van-button>
    &emsp; &emsp;
    <van-button type="primary" @click="syncAdd">异步增加</van-button>
  </div>
</template>

<script>
// 引入api
import {
  mapState, // 返回一个计算属性，需要配合computed使用
  mapMutations, // 返回对应mapMtation，直接挂在到this实例上访问
} from 'vuex'
import * as request from './api'
export default {
  name: 'Home',
  data() {
    return {}
  },
  computed: {
    // a module  不同的module 可以引入多次
    ...mapState({
      aInfo: state => state.a
    }),
    // b moudle 不同的module 可以引入多次
    ...mapState({
      bInfo: state => state.b
    }),
    // 也可以直接引入，使用state中的key值，挂在到当前实例
    ...mapState(['count1']),
    
  },
  methods: {
    // a module 对应store modules中的key  不同的module 可以引入多次
    ...mapMutations('moduleA', {
      increasement: 'increasement'
    }),
    // 直接调用
    add() {
      this.$store.commit('increment', 'add')
    },
    // 异步出发 actions
    syncAdd() {
      console.log('add')
      this.$store.dispatch('syncIncrement', '调用时穿的参数')
    },
    /**
     * @des 后区商品列表
     */
    async getProductList() {
      // let res = await this.$axios.post('/mock/product/getProductLisgt')
      let res = await request.getProductList()
      console.log('res', res)
    }
  },
  mounted() {
    console.log('home', this)
    this.getProductList()
  },
  beforeCreate() {},
  created() {},
  activated() {},
  updated() {},
  beforeDestroy() {}
}
</script>
