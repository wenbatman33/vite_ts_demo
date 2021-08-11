import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import axios from './axios'
import { createPinia } from 'pinia'
import router from './router';
import 'ant-design-vue/dist/antd.less';
import '@/assets/scss/main.scss'


createApp(App).use(router).use(createPinia()).use(axios).use(Antd).mount('#app')
