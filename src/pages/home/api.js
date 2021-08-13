import axios from '../../utils/request'
const pre = '/mock'
// const pre = '/api'
/**
 * @desc 获取商品列表
 * @returns axios promise
 */
export const getProductList = () => axios.post(`${pre}/product/getProductLisgt`)
// export const getProductList = () => axios.post(`${pre}/product/getProductLisgt`)