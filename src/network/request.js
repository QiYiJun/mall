import axios from "axios";
import { baseURL } from "./api";

export function request (config) {
  const instance = axios.create({
    baseURL: baseURL,
    timeout: 5000
  })

  // 请求拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {

  })

  // 响应拦截器
  instance.interceptors.response.use(res => {
    // 直接返回data
    return res.data
  }, err => {

  })

  // 发送网络请求
  return instance(config)

}