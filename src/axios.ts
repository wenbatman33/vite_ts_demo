import axios from "axios";
let ENV: any = import.meta.env;

let config = {
  baseURL: ENV.VITE_API_URL
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default {
  install:function(app:any, options:any) {
    // 添加全局的方法
    app.config.globalProperties.axios = _axios;
    // 添加全局的方法
    app.config.globalProperties.$translate = (key: any) => {
        return key
    }
  }
}