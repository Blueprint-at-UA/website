module.exports = {
	purge: ['./src/**/*.tsx', './src/**/*.html'],
	theme: {
		extend: {
			backgroundColor: theme => ({
				...theme('colors'),
				primary: '#0078E8',
				'primary-light': '#2091fa',
			}),
			fontFamily: {
				sans:
					'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
			},
		},
	},
	variants: {},
	plugins: [],
}
