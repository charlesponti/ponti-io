import type { Config } from "tailwindcss";

const config: Config = {
	plugins: [require("@tailwindcss/forms"), require("daisyui")],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			width: {
				"part-full": "calc(100% - 1.5rem)",
			},
			fontSize: {
				"fluid-1": "clamp(24px, calc(24px + 2.03vw), 45px)",
				"fluid-2": "clamp(32px, calc(32px + 3.50vw), 75px)",
				"fluid-3": "clamp(42px, calc(42px + 4.79vw), 85px)",
			},
			margin: {
				"fluid-2": "clamp(32px, calc(32px + 4.79vw), 75px)",
			},
			lineHeight: {
				"fluid-1": "clamp(20px, calc(20px + 2.03vw), 50px)",
				"fluid-2": "clamp(32px, calc(32px + 3.50vw), 75px)",
				"fluid-3": "clamp(42px, calc(42px + 4.79vw), 85px)",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				primary: {
					// Customize it on globals.css :root
					50: "rgb(var(--tw-color-primary-50) / <alpha-value>)",
					100: "rgb(var(--tw-color-primary-100) / <alpha-value>)",
					200: "rgb(var(--tw-color-primary-200) / <alpha-value>)",
					300: "rgb(var(--tw-color-primary-300) / <alpha-value>)",
					400: "rgb(var(--tw-color-primary-400) / <alpha-value>)",
					500: "rgb(var(--tw-color-primary-500) / <alpha-value>)",
					600: "rgb(var(--tw-color-primary-600) / <alpha-value>)",
					700: "rgb(var(--tw-color-primary-700) / <alpha-value>)",
					800: "rgb(var(--tw-color-primary-800) / <alpha-value>)",
					900: "rgb(var(--tw-color-primary-900) / <alpha-value>)",
				},
				dark: "#222222",
			},
			keyframes: {
				flicker: {
					"0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": {
						opacity: "0.99",
						filter:
							"drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))",
					},
					"20%, 21.999%, 63%, 63.999%, 65%, 69.999%": {
						opacity: "0.4",
						filter: "none",
					},
				},
				shimmer: {
					"0%": {
						backgroundPosition: "-700px 0",
					},
					"100%": {
						backgroundPosition: "700px 0",
					},
				},
			},
			animation: {
				flicker: "flicker 3s linear infinite",
				shimmer: "shimmer 1.3s linear infinite",
			},
		},
	},
};
export default config;
