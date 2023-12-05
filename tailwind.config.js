/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			animation: {
				errortext: "errortext infinite 4s ease-in-out",
			},
			keyframes: {
				errortext: {
					"0%": {
						transform: "translate(0rem, 0rem)",
					},
					"33%": {
						transform: "translate(0.25rem, 0.25rem)",
					},
					"66%": {
						transform: "translate(-0.25rem, -0.25rem)",
					},
					"100%": {
						transform: "translate(0rem, 0rem)",
					},
				},
			},
			colors: {
				emphasis: {
					500: "#FFC107",
				},
			},
		},
	},
	plugins: [],
};
