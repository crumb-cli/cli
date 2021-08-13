<template>
  <div id="app">
    app
    <div class="link-wrap">
      <router-link to="/">to home</router-link>
      &emsp;&emsp;
      <router-link to="/a">to page a</router-link>
      &emsp;&emsp;
      <router-link to="/b">to page b</router-link>
    </div>
    <!-- 渲染不销毁也买呢 -->
    <keep-alive v-if="route.meta.keepAlive">
      <router-view />
    </keep-alive>
    <!-- 渲染可销毁页面 -->
    <router-view v-else />
    <!-- tabbar -->
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from './components/tabbar'
export default {
  name: 'App',
  components: {
    Tabbar
  },
  computed: {
    route() {
      return this.$route
    }
  },
  mounted() {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
