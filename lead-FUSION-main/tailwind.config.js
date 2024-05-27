/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx}", "./index.html"],
	theme: {
		extend: {
			colors: {
				darkGreen: "#007669",
				lightGreen: "#6cc19e",
				warning: "#f4b952",
			},
		},
	},
	plugins: [],
}
