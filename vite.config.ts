import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
import { minifyHtml, injectHtml } from 'vite-plugin-html'
import dayjs from 'dayjs'
import pkg from './package.json';

export default ({ mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
	return defineConfig({
		server: {
			port: 8888,
			open: true,
			proxy: {}
		},
		plugins: [
			vue(),
			minifyHtml(),
			injectHtml({
				injectData: {
					title: process.env.VITE_TITLE,
					ver: pkg.version,
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