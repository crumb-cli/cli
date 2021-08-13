<template>
  <div class="a"> 
    <h3 class="title">page a</h3>
    <van-button type="primary" @click="logout">退出登录</van-button>
  </div>
</template>

<script>
import * as config from '../utils/config'
export default {
  methods: {
    // 退出登录
    async logout() {
      let res = await this.$axios.post('/mock/user/logout')
      if (res && res.code == 0) {
        this.clearChache()
        this.$router.push('/login')
      }
      
    },
    /**
     * @desc 清除缓存
     */
    clearChache() {
      let keys = [
        config.TOKENKEY,
        config.USERINFO
      ]
      keys.map(key => localStorage.removeItem(key))
    }
  }
}
</script>
<style lang="less" scoped>
  .a{
    .title{
      font-size: 50px;
    }
  }
</style>