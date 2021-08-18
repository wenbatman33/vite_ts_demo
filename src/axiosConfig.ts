import axios, { AxiosResponse } from "axios";

let ENV: any = import.meta.env;
axios.defaults.baseURL = ENV.VITE_API_URL;

axios.interceptors.request.use(
	(config) => {
		// window.localStorage.TOKEN && window.localStorage.TOKEN;
		// window.localStorage.UID && window.localStorage.UID;
		return config
	},
  (error)=> Promise.reject(error)
);

// Add a response interceptor
axios.interceptors.response.use(
  (response: AxiosResponse)=> response,
  (error)=> Promise.reject(error)
);

export default axios;
