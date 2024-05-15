/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'display': ['Poppins']
			},
			textColor : {
				"primary-1": '#0C632E'
			},
			backgroundColor: {
				"primary-1": '#0C632E'
			}
		},
	},
	plugins: [],
}
