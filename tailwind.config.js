/** @type {import('tailwindcss').Config} */
import animate from "tailwindcss-animate";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			sans: ["Montserrat", ...fontFamily.sans],

			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",

				primary: {
					DEFAULT: "hsl(147, 54%, 43%)", // Seafoam Green #6FCF97
					foreground: "hsl(0, 0%, 100%)",
					50: "hsl(147, 54%, 95%)",
					100: "hsl(147, 54%, 90%)",
					200: "hsl(147, 54%, 80%)",
					300: "hsl(147, 54%, 70%)",
					400: "hsl(147, 54%, 66%)",
					500: "hsl(147, 54%, 63%)",
					600: "hsl(147, 54%, 58%)",
					700: "hsl(147, 54%, 50%)",
					800: "hsl(147, 54%, 40%)",
					900: "hsl(147, 54%, 30%)",
				},
				secondary: {
					DEFAULT: "hsl(222, 47%, 11%)", // slate-900
					foreground: "hsl(0, 0%, 100%)",
					50: "hsl(210, 40%, 98%)",
					100: "hsl(214, 32%, 91%)",
					200: "hsl(216, 33%, 85%)",
					300: "hsl(215, 20%, 65%)",
					400: "hsl(215, 15%, 50%)",
					500: "hsl(215, 19%, 35%)",
					600: "hsl(215, 25%, 27%)",
					700: "hsl(222, 27%, 20%)",
					800: "hsl(222, 47%, 11%)",
					900: "hsl(210, 50%, 4%)",
				},

				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				chart: {
					1: "hsl(var(--chart-1))",
					2: "hsl(var(--chart-2))",
					3: "hsl(var(--chart-3))",
					4: "hsl(var(--chart-4))",
					5: "hsl(var(--chart-5))",
				},
			},
			screens: {
				xxl: "2400px",
			},
			fontSize: {
				sm: "calc(0.875rem * var(--scale-factor))",
				base: "calc(1rem * var(--scale-factor))",
				lg: "calc(1.125rem * var(--scale-factor))",
				xl: "calc(1.25rem * var(--scale-factor))",
				"2xl": "calc(1.5rem * var(--scale-factor))",
				"3xl": "calc(1.875rem * var(--scale-factor))",
				"4xl": "calc(2.25rem * var(--scale-factor))",
			},
			spacing: {
				1: "calc(0.25rem * var(--scale-factor))",
				2: "calc(0.5rem * var(--scale-factor))",
				3: "calc(0.75rem * var(--scale-factor))",
				4: "calc(1rem * var(--scale-factor))",
				6: "calc(1.5rem * var(--scale-factor))",
				8: "calc(2rem * var(--scale-factor))",
				10: "calc(2.5rem * var(--scale-factor))",
			},
			borderRadius: {
				lg: "calc(0.5rem * var(--scale-factor))",
				xl: "calc(0.75rem * var(--scale-factor))",
				"2xl": "calc(1rem * var(--scale-factor))",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [animate],
};

export default config;
