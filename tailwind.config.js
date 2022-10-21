/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				mainBg: "url('/src/img/Main-bg.jpg')",
				ourBestBg: "url('/src/img/Paper-bg.jpg')",
			},
			dropShadow: { textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' },
			height: {
				33: '134px',
				122: '490px',
				140: '560px',
				160: '640px',
			},
			width: { unset: 'unset' },
			maxWidth: {
				147: '590px',
			},
			maxHeight: {
				540: '540px',
			},
		},
		fontSize: {
			40: '40px',
			10: '10px',
			xs: '12px',
			sm: '0.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.563rem',
			'3xl': '1.953rem',
			'4xl': '2.441rem',
			'5xl': '3.052rem',
		},
	},
	plugins: [],
}
