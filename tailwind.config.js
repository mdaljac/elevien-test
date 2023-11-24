/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			padding: "2rem",
			center: true,
		},
		fontFamily: {
			sans: ["Inter", "sans-serif"],
		},
		fontSize: {
			xs: "0.75rem", // 12px
			sm: "0.875rem", // 14px
			md: "1rem", // 16px
			lg: "1.125rem", // 18px
			xl: "1.375rem", // 22px
			"2xl": "2rem", // 32px
		},
		fontWeight: {
			regular: 400,
			semibold: 600,
			bold: 700,
		},
		extend: {
			colors: {
				black: "#000",
				white: "#fff",
				primary: "#FF2B51",
				orange: "#FF842B",
				body: {
					default: "#080A0F",
					secondary: "#72747E",
					light: "#38354D",
				},
				placeholder: "#B2B2B8",
				success: "#27C200",
				alert: "#EA1A40",
				warning: "#FFB800",
				overlay: "#222534",
			},
		},
	},
	plugins: [
		// ...
		require("@tailwindcss/forms"),
	],
};
