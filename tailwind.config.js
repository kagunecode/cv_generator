/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				emphasis: {
					500: "#FFC107",
				},
			},
		},
	},
	plugins: [],
};
