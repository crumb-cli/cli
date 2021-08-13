const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const HomeMockApi = require('./src/mock/home')
const LoginMockApi = require('./src/mock/login')

module.exports = {
  devServer: {
    before(app, /*server, compiler */) {
      // 首页相关mock接口
      HomeMockApi(app)

      // 登录相关mock 接口
      LoginMockApi(app)
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 75,
            propList: ['*'],
            "selectorBlackList":["van-"]   //排除vant框架相关组件
          })
        ]
      }
    }
  }
}