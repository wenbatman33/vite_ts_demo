module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{vue,ts,tsx}'],
	prefix: '',
	important: false,
	separator: ':',
	theme: {
		extend: {
			colors: {
				// 自定義網站常用色系
				// psV3Red: '#a62337',
				// psV3RedLight: '#df2f4a',
				// psV3Yellow: '#f8b62d',
				// psV3YellowNeon: '#ffff10',
				// psV3Orange: '#ff7a00',
				// psV3Blue: '#2f80ed',
				// psV3Green: '#00da16',
			},
			minHeight: {
				'50vh': '50vh',
			},
		},
	},
	corePlugins: {},
	// tailwindcss 多行文本自动省略
	// ex: <p class="line-clamp-3">
	plugins: [require('@tailwindcss/line-clamp')],
	future: {
		purgeLayersByDefault: true,
		removeDeprecatedGapUtilities: true,
	},
};
