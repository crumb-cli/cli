import axios from 'axios'
// import router from '../router'
import { Toast } from 'vant'
import * as sysConfig from './config'

const timeout = 60000 // 超时时间 默认1分钟
const baseURL = 'http://localhost:8080'
let request = axios.create({
  timeout,
  baseURL
})
// 添加token
const addToken = config => {
  let token = localStorage.getItem(sysConfig.TOKENKEY)
  // 添加token值请求头
  config.headers.Authorization = `Bearer ${token}`
  return config
}
// 添加公共参数
const addParams = config => {
  let userId = 'userId' // 用户id
  let deviceId = 'h5' // 设备类型
  // 公用参数对象
  let params = {
    userId,
    deviceId
  }

  let key = config.method == 'post' ? 'data' : 'params'
  // 参数拼接
  config[key] = {
    ...config[key],
    ...params
  }
  
  return config
}
// 请求前的处理
request.interceptors.request.use(config => {
  return Promise.resolve(config)
  .then(addToken)
  .then(addParams)
})
/**
 * @desc 检测请求状态
 * @param {*} response 
 * @returns 
 */
const checkNetWorkStatus = response => {
  console.log('response', response)
  let {
    status,
    message
  } = response
  const errorCodes = [404, 403]
  console.log('response', response)
  // 请求结果错误 提示用户
  if (errorCodes.includes(status)) {
    Toast({
      type: 'fail',
      message
    })
  }
  
  // 
  return response
}

// 清除登录信息
const clearLoginInfo = () => {
  // 需要清理的缓存的key
  const keys = [
    sysConfig.TOKENKEY,
    'userId'
  ]
  // 遍历清除缓存的用户信息
  keys.map(key => localStorage.removeItem(key))
}
// 检测请求数据
const checkCode = response => {
  let { errorCode, errorMessage } = response.data
  // 检查请求状态是否正常
  if (errorCode !== 0) {
    Toast({
      type: 'fail',
      message: errorMessage
    })
  }
  // 登录信息失效，需要重新登录
  let codes = [401, 403]
  // 登录 失效检测
  if (codes.includes(errorCode)) {
    clearLoginInfo()
    // 保存当前页面路由 用户登录后使用
    sessionStorage.setItem(sysConfig.REJIECTURL, location.href)
    // 重定向至登录页面 
    // router.push('/login')
  }
  return response
}
// 响应处理
request.interceptors.response.use(response => {
  return Promise.resolve(response)
    .then(checkNetWorkStatus)
    .then(checkCode)
    .then(response => response.data)
})

// 导出 axios 实例
export default request

