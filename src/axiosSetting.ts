import axios from "axios";

let ENV: any = import.meta.env;
axios.defaults.baseURL = ENV.VITE_API_URL
axios.interceptors.request.use(
	(config) => {
		if (window.localStorage.TOKEN && window.localStorage.UID) {
			config.headers.token = window.localStorage.TOKEN;
			config.headers.uid = window.localStorage.UID;
		}
		return config
	},
  (error)=> Promise.reject(error)
);

// Add a response interceptor
axios.interceptors.response.use(
  (response)=> response,
  (error)=> Promise.reject(error)
);

export default axios;
