<template>
  <div class="user-login">
    <h3 class="title">用户登录页面</h3>
    <div class="btn-wrap">
      <van-button type="primary" @click="login">登录</van-button>
    </div>
  </div>
</template>

<script>
import * as config from '../../utils/config'
export default {
  name: 'Login',
  data() {
    return {
      token: 'ad6b5732c36321f2dafed737a._ad6b5732c36321f2dafed737a._ad6b5732c36321f2dafed737a',
      user: {
        name: 'hello world',
        age: 12,
        id: '100001',
        avatar: ''
      }
    }
  },
  methods: {
    // 登录
    login() {
      let {token, user} = this
      // 缓存用户信息
      localStorage.setItem(config.TOKENKEY, token)
      localStorage.setItem(config.USERINFO, JSON.stringify(user))
      // 处理跳转
      let rejectUrl = sessionStorage.setItem(config.REJIECTURL)
      // 登录成功 需要重定向
      let path = rejectUrl ? rejectUrl : '/'
      // 使用replace 将当前path history 替换
      this.$router.replace(path)
    }
  }
}
</script>