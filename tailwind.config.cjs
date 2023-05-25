/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Aeonik', ...defaultTheme.fontFamily.sans],
		},
		colors: {
			transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
			'elephant': {
				DEFAULT: '#0f3c50',
				50: '#edfdfe',
				100: '#d2f6fb',
				200: '#abecf6',
				300: '#71deef',
				400: '#30c5e0',
				500: '#14a8c6',
				600: '#1386a7',
				700: '#176c87',
				800: '#1b596f',
				900: '#1b4a5e',
				950: '#0f3c50',
			},
			'gossip': {
				DEFAULT: '#aaf7b2',
				50: '#f0fdf1',
				100: '#dbfddf',
				200: '#aaf7b2',
				300: '#83f290',
				400: '#46e259',
				500: '#1ec933',
				600: '#13a625',
				700: '#128320',
				800: '#146720',
				900: '#12551d',
				950: '#042f0b',
		},
		
		},
		extend: {},
	},
	plugins: [],
}
