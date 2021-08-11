import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
import { minifyHtml, injectHtml } from 'vite-plugin-html'
import dayjs from 'dayjs'
// import { viteMockServe } from 'vite-plugin-mock'

export default ({ mode }) => {
	console.log(mode)
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
	return defineConfig({
		server: {
			port: 8888,
		},
		plugins: [
			vue(),
			// viteMockServe 不好用
			// viteMockServe({ supportTs: true}),
			minifyHtml(),
			injectHtml({
				injectData: {
					title: process.env.VITE_TITLE,
					ver: process.env.VITE_VER,
					buildTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
				},
			}),
		],
		resolve: {
			alias: {
				'@': resolve(__dirname, './src'),
			}
		},
		css: {
			preprocessorOptions: {
				less: {
					javascriptEnabled: true,
				}
			},
		}
	})
}