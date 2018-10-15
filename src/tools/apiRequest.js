/**
 * Created by huangyongye Dashen on 2018/5/16.
 */
import axios from 'axios'
//设置时间超时
let instance = axios.create()
instance.defaults.timeout = 10000
axios.interceptors.request.use(
  config => {

    return config
  },
  error => {
    return Promise.reject(error)
  }
)
//http response 封装后台返回拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    //如果返回这个message 就直接跳到登录页面

   


    return Promise.reject(error)
  }
)




const get = (url, params) => {

  return axios.get(url, { params })

}
const post = (url, params) => {

  return axios.post(url, params)
}
let requests = { ...axios }
requests.get = get
requests.post = post

export const request = requests


export default requests