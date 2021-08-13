/**
 * @desc 退出登录
 * @param { object } request express 请求对象
 * @param { object } response express 响应对象
 * @returns { object } json 对象
 */
 const loginOut = (request, response) => {
  let result = {
    "errorCode": 0,
    "errorMessage": "success",
    "data": {},
    "success": true
  }
  response.json(result)
}

/**
 * @desc 退出登录
 * @param { object } request express 请求对象
 * @param { object } response express 响应对象
 * @returns { object } json 对象
 */
 const loginIn = (request, response) => {
  let result = {
    "errorCode": 0,
    "errorMessage": "success",
    "data": {
      token: 'ad6b5732c36321f2dafed737a._ad6b5732c36321f2dafed737a._ad6b5732c36321f2dafed737a',
      user: {
        name: 'hello world',
        age: 12,
        id: '100001',
        avatar: ''
      }
    },
    "success": true
  }
  response.json(result)
}

// home Mock api
const LoginMockApi = (app) => {
  app.post('/mock/user/loginout', loginOut)
  app.post('/mock/user/login', loginIn)
}
module.exports = LoginMockApi
