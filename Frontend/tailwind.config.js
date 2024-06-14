/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		// break points (se mapean a media queries min-width)
		screens: {
			phone: '430px',
			tablet: '744px',
			desktop: '1440px',
		},
		extend: {
			// typography
			fontFamily: {
				'dm-sans': ['"DM sans"', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
			},
			fontSize: {
				// usar con font-dm-sans
				h1: [
					'40px',
					{
						lineHeight: '52px',
						fontWeight: '700',
					},
				],
				h2: [
					'32px',
					{
						lineHeight: '44px',
						fontWeight: '500',
					},
				],
				// usar con font-inter
				'body-1': [
					'18px',
					{
						lineHeight: '28px',
						fontWeight: '500',
					},
				],
				'body-2': [
					'16px',
					{
						lineHeight: '26px',
						fontWeight: '400',
					},
				],
				'body-3': [
					'14px',
					{
						lineHeight: '24px',
						fontWeight: '400',
					},
				],
			},
			boxShadow: {
				'zero-elevation': '0px 8px 16px -4px #16223314',
				'low-elevation':
					'0px 16px 24px 0px #16223314,0px 4px 8px -4px #16223314',
				'medium-elevation':
					'0px 16px 32px 0px #16223329,0px 4px 12px -4px #1622331F',
				'high-elevation':
					'0px 4px 4px 0px #1622330A,0px 4px 24px 0px #1622330A,0px 24px 24px 0px #1622330A,0px 32px 32px 0px #1622330A,0px 64px 64px 0px #1622331F,0px 120px 120px 0px #16223314',
			},
			colors: {
				// 'blue'
				'primary-50': '#EBEAFC',
				'primary-100': '#C0BEF6',
				'primary-200': '#A29EF2',
				'primary-300': '#7872EC',
				'primary-400': '#5D56E8',
				'primary-500': '#352CE2',
				'primary-600': '#3028CE',
				'primary-700': '#261FA0',
				'primary-800': '#1D187C',
				'primary-900': '#16125F',

				// 'ligth yellow'
				'secondary-50': '#FFFEEC',
				'secondary-100': '#FFFCC4',
				'secondary-200': '#FFFCC4',
				'secondary-300': '#FFF87F',
				'secondary-400': '#FFF766',
				'secondary-500': '#FFF540',
				'secondary-600': '#E8DF3A',
				'secondary-700': '#B5AE2D',
				'secondary-800': '#8C8723',
				'secondary-900': '#8C8723',

				// 'pastel blue'
				'tertiary-50': '#F5F9FF',
				'tertiary-100': '#DFECFF',
				'tertiary-200': '#D0E3FF',
				'tertiary-300': '#BBD7FF',
				'tertiary-400': '#ADCFFF',
				'tertiary-500': '#99C3FF',
				'tertiary-600': '#8BB1E8',
				'tertiary-700': '#6D8AB5',
				'tertiary-800': '#546B8C',
				'tertiary-900': '#40526B',

				// 'warning'
				'yellow-50': '#FFF7E7',
				'yellow-100': '#FFE6B4',
				'yellow-200': '#FFD990',
				'yellow-300': '#FFC85D',
				'yellow-400': '#FFBD3D',
				'yellow-500': '#FFAD0D',
				'yellow-600': '#E89D0C',
				'yellow-700': '#B57B09',
				'yellow-800': '#8C5F07',
				'yellow-900': '#6B4905',

				// 'error'
				'red-50': '#FFEBEB',
				'red-100': '#FFBFC1',
				'red-200': '#FFA1A3',
				'red-300': '#FF7678',
				'red-400': '#FF5B5E',
				'red-500': '#FF3236',
				'red-600': '#E82E31',
				'red-700': '#B52426',
				'red-800': '#8C1C1E',
				'red-900': '#6B1517',

				// 'dark gray'
				'text-50': '#E6E6E8',
				'text-100': '#B1B1B7',
				'text-200': '#8C8B94',
				'text-300': '#575663',
				'text-400': '#363545',
				'text-500': '#040316',
				'text-600': '#040314',
				'text-700': '#030210',
				'text-800': '#02020C',
				'text-900': '#020109',

				// 'basics'
				background: '#FBFBFE',
				white: '#FFFFFF',
			},
		},
	},
	plugins: [],
}
