// 封装请求
import axios from "axios"
import { BASE_URL, TIMEOUT } from "./confitg"

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

instance.interceptors.request.use(config => {
  // * 1.loading操作
  // * 2.携带token的操作
  // * 3.params或者data的序列化操作
  return config
}, err => {
  return err
})

instance.interceptors.response.use(response => {
  return response.data
}, err => {
  if (err && err.response) {
    switch (err.response) {
      case 400:
        console.log("请求错误")
        break;
      case 401:
        console.log("未授权登录")
        break;
      default:
        console.log("其他错误")
    }
  }
  return err
})

export default instance