/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#231F20',
				'c-blue': '#00334E',
				'c-light-blue': '#145374',
				'c-yellow': '#FFD449'
			}
		},
	},
	plugins: [],
}
