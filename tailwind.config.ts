import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	plugins: [
		require("@tailwindcss/forms"),
		require("daisyui"),
		require("tailwindcss-animate"),
	],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-inter)", "system-ui", "sans-serif"],
				serif: ["var(--font-crimson)", "Georgia", "serif"],
			},
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
				// Luxury color palette - bone and olive tones
				bone: {
					50: "#fdfdf8",
					100: "#faf9f0",
					200: "#f5f2e1",
					300: "#ede8d1",
					400: "#e3dbbc",
					500: "#d4c9a3",
					600: "#c1b38a",
					700: "#aa9770",
					800: "#8c7c5b",
					900: "#726549",
				},
				olive: {
					50: "#f7f8f4",
					100: "#eef0e7",
					200: "#dde1d0",
					300: "#c5ccb0",
					400: "#aab38c",
					500: "#929d6f",
					600: "#7a8357",
					700: "#626947",
					800: "#50553b",
					900: "#434733",
				},
				sage: {
					50: "#f6f7f6",
					100: "#e3e6e3",
					200: "#c7ccc7",
					300: "#a4ada4",
					400: "#818d81",
					500: "#667066",
					600: "#515951",
					700: "#424942",
					800: "#373d37",
					900: "#2f332f",
				},
				charcoal: {
					50: "#f6f6f6",
					100: "#e7e7e7",
					200: "#d1d1d1",
					300: "#b0b0b0",
					400: "#888888",
					500: "#6d6d6d",
					600: "#5d5d5d",
					700: "#4f4f4f",
					800: "#454545",
					900: "#3d3d3d",
				},
				primary: {
					"50": "rgb(var(--tw-color-primary-50) / <alpha-value>)",
					"100": "rgb(var(--tw-color-primary-100) / <alpha-value>)",
					"200": "rgb(var(--tw-color-primary-200) / <alpha-value>)",
					"300": "rgb(var(--tw-color-primary-300) / <alpha-value>)",
					"400": "rgb(var(--tw-color-primary-400) / <alpha-value>)",
					"500": "rgb(var(--tw-color-primary-500) / <alpha-value>)",
					"600": "rgb(var(--tw-color-primary-600) / <alpha-value>)",
					"700": "rgb(var(--tw-color-primary-700) / <alpha-value>)",
					"800": "rgb(var(--tw-color-primary-800) / <alpha-value>)",
					"900": "rgb(var(--tw-color-primary-900) / <alpha-value>)",
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				dark: "#222222",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
			keyframes: {
				pulse: {
					"0%, 100%": {
						opacity: "0.99",
						filter:
							"drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))",
					},
					"50%": {
						opacity: "0.4",
						filter: "none",
					},
				},
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
				pulse: "pulse 1.5s ease-in-out infinite",
				flicker: "flicker 3s linear infinite",
				shimmer: "shimmer 1.3s linear infinite",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
};
export default config;
