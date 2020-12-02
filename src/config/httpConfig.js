import axios from 'axios'
import store from '@/store/index.js'
import baseURL from './baseUrl'
import { Message } from 'element-ui'
import {showFullScreenLoading,tryHideFullScreenLoading} from './Loading'
var instance = axios.create({
    timeout: 5000,
    baseURL
})
// 添加请求拦截器
instance.interceptors.request.use(
    function (config) {
        // 请求头添加token
        if (store.state.UserToken) {
            config.headers.Authorization = store.state.UserToken
        }
        console.log(config)
        if (config.headers.isLoading !== false) {
            // 如果配置了isLoading: false，则不显示loading
            showFullScreenLoading()
          }
       
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

// 响应拦截器即异常处理
instance.interceptors.response.use(
    response => {
        tryHideFullScreenLoading()
        let data  =  response.data
        if (data.code === 0) {
            return data.data
        } else {
            Message({
                showClose: true,
                message: data.message,
                type: 'error',
                duration: 2 * 1000
    
            })
            return Promise.reject(data)
        }
         
    },
    err => {
        if (err && err.response) {
            tryHideFullScreenLoading()
            switch (err.response.status) {
                case 400:   
                    Message({
                        message: '请求出错',
                        type: 'error',
                        duration: 5 * 1000
                    })
                    break
                case 401:
                    Message.warning({
                        message: '授权失败，请重新登录'
                    })
                    store.commit('LOGIN_OUT')
                    setTimeout(() => {
                        window.location.reload()
                    }, 1000)
                    return
                case 403:
                    Message({
                        message: '拒绝访问',
                        type: 'error',
                        duration: 5 * 1000
                    })
                    break
                case 404:
                   
                    Message({
                        message: '请求错误,未找到该资源',
                        type: 'error',
                        duration: 5 * 1000
                    })
                    break
                case 500:
                   
                    Message({
                        message: '服务器端出错',
                        type: 'error',
                        duration: 5 * 1000
                    })
                    break
            }
        } else {
            tryHideFullScreenLoading()
            Message({
                message: '连接服务器失败',
                type: 'error',
                duration: 5 * 1000
            })
        }
        return Promise.reject(err.response)
    }
)

// http.get = function (url, options,headers) {
//      console.log(headers,'222')
//     return new Promise((resolve, reject) => {
//         instance
//             .get()
//             .then(response => {
//                 console.log(response,'我是2222')
                // if (response.code === 0) {
                //     resolve(response.data)
                // } else {
                //     Message.error({
                //         message: response.message
                //     })
                //     reject(response.message)
                // }
//             })
//             .catch(e => {
//                 console.log(e)
//             })
//     })
// }

// http.post = function (url, data, options,loading) {
//     return new Promise((resolve, reject) => {
//         instance
//             .post(url, data, options)
//             .then(response => {
//                 if (response.code === 0) {
//                     resolve(response.data)
//                 } else {
//                     Message.error({
//                         message: response.message
//                     })
//                     reject(response.message)
//                 }
//             })
//             .catch(e => {
//                 console.log(e)
//             })
//     })
// }

export default instance
