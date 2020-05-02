import { useState, useEffect } from 'react'

export const checkDarkMode = () => {
	if (
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches
	) {
		return true
	}
	return false
}

export const addDarkMode = () => {
	if (
		checkDarkMode() &&
		!document.documentElement.classList.contains('mode-dark')
	) {
		document.documentElement.classList.add('mode-dark')
	} else if (
		!checkDarkMode() &&
		document.documentElement.classList.contains('mode-dark')
	) {
		document.documentElement.classList.remove('mode-dark')
	}

	const x =
		window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')

	x.addListener(addDarkMode)

	return () => x.removeListener(addDarkMode)
}

export const useDarkMode = () => {
	const [dark, setDark] = useState(checkDarkMode())

	const checkDark = () => {
		setDark(checkDarkMode())
	}

	useEffect(() => {
		const x =
			window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')

		x.addListener(checkDark)

		return () => x.removeListener(checkDark)
	})

	return dark
}
