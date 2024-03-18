/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'"Lexend Variable"',
					'"DM Sans Variable"',
					'"PT Mono"',
					...defaultTheme.fontFamily.sans,
				],
			},
			colors: {
				accent: "#FF5B27",
			},
		},
	},
	plugins: [require("tailwindcss-animated")],
}
