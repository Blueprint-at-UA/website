module.exports = {
	purge: {
		content: ['./src/**/*.tsx', './src/**/*.html'],
		options: {
			whitelist: ['mode-dark'],
		},
	},
	theme: {
		extend: {
			backgroundColor: theme => ({
				...theme('colors'),
				primary: '#0078E8',
				'primary-light': '#2091fa',
			}),
			textColor: theme => ({
				...theme('colors'),
				primary: '#0078E8',
				'primary-light': '#2091fa',
			}),
			borderColor: theme => ({
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
	variants: {
		backgroundColor: [
			'dark',
			'dark-hover',
			'dark-group-hover',
			'dark-even',
			'dark-odd',
			'hover',
		],
		borderColor: [
			'dark',
			'dark-hover',
			'dark-focus',
			'dark-group-hover',
			'dark-focus-within',
			'dark-even',
			'dark-odd',
			'hover',
		],
		textColor: [
			'dark',
			'dark-hover',
			'dark-active',
			'dark-group-hover',
			'dark-placeholder',
			'dark-even',
			'dark-odd',
			'hover',
		],
	},
	plugins: [require('tailwindcss-dark-mode')()],
}
