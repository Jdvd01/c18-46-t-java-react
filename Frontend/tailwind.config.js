/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'dm-sans': ['"DM sans"','sans-serif'],
				'inter':['Inter','sans-serif']
			}
		},
	},
	plugins: [],
}
