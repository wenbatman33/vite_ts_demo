import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import qs from "qs"
import { message } from 'ant-design-vue';
import { checkStatus } from './checkStatus';

let ENV = import.meta.env;

// 声明一个 Map 用于存储每个请求的标识 和 取消函数
const pending = new Map()
const addPending = (config: AxiosRequestConfig) => {
  const url = [
    config.method,
    config.url,
    qs.stringify(config.params),
    qs.stringify(config.data)
	].join('&')
	
	config.cancelToken = config.cancelToken || new axios.CancelToken(cancel => {
		// 如果 pending 中不存在当前请求，则添加进去
    if (!pending.has(url)) {
      pending.set(url, cancel)
    }
  })
}

const removePending = (config: AxiosRequestConfig) => {
  const url = [
    config.method,
    config.url,
    qs.stringify(config.params),
    qs.stringify(config.data)
  ].join('&')
	if (pending.has(url)) {
		// 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
    const cancel = pending.get(url)
    cancel(url)
    pending.delete(url)
  }
}

export const clearPending = () => {
  for (const [url, cancel] of pending) {
    cancel(url)
  }
  pending.clear()
}

const API_REQUEST = axios.create({
	baseURL: ENV.VITE_API_URL,
	// api站台是否有憑證設定
	// withCredentials: true,
	timeout: 30000,
  headers: {
    get: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
    post: {'Content-Type': 'application/json;charset=utf-8'}
  },
})

// 请求拦截器
API_REQUEST.interceptors.request.use((config: AxiosRequestConfig) => {
	// 在请求开始前，对之前的请求做检查取消操作
	removePending(config)
	// 将当前请求添加到 pending 中
  addPending(config)
  let token = localStorage.getItem('token')
  if(token){
    config.headers.Authorization = `${token}`;
  }
  return config
}, (error) => {
  // 错误抛到业务代码
  error.data = {}
  error.data.msg = '服务器异常，请联系管理员！'
  return Promise.resolve(error)
})

// 响应拦截器
API_REQUEST.interceptors.response.use((response: AxiosResponse) => {
	// 在请求结束后，移除本次请求
  removePending(response)
  const status = response.status
  let msg = ''
  if (status < 200 || status >= 300) {
		// 处理http错误，抛到业务代码
    msg = checkStatus(status)
    if (typeof response.data === 'string') {
			response.data = { msg }
    } else {
			response.data.msg = msg
    }
	}
	// 這段需要視情況修改
	response.data.code === 1014 && console.log('這段需要視情況修改 您的登陆状态失效')
	
  return response
}, (error) => {
	console.log(error)
  if (axios.isCancel(error)) {
    console.log('repeated request: ' + error.message)
  } else {
    // handle error code
    // 错误抛到业务代码
    error.data = {}
    error.data.msg = '请求超时或服务器异常，请检查网络或联系管理员！'
		message.error(error.data.msg);
  }
  return Promise.reject(error)
})

export default API_REQUEST