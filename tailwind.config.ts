import type { Config } from 'tailwindcss';

const { fontFamily } = require('tailwindcss/defaultTheme');

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in-opacity': {
					'0%': {
						opacity: '0',
					},
					'100%': {
						opacity: '1',
					},
				},
				'enter-from-right': {
					'0%': {
						transform: 'translateX(100%)',
					},
					'100%': {
						transform: 'translateX(0)',
					},
				},
				'enter-from-left': {
					'0%': {
						transform: 'translateX(-100%)',
					},
					'100%': {
						transform: 'translateX(0)',
					},
				},
				'enter-from-top': {
					'0%': {
						transform: 'translateY(-100%)',
					},
					'100%': {
						transform: 'translateY(0)',
					},
				},
				'enter-from-bottom': {
					'0%': {
						transform: 'translateY(100%)',
					},
					'100%': {
						transform: 'translateY(0)',
					},
				},
				'hero-image-in': {
					'0%': {
						transform: 'scale(1.2)',
						filter: 'blur(10px)',
					},
					'100%': {
						transform: 'scale(1)',
						filter: 'blur(0px)',
					},
				},
				'slide-in': {
					'0%': { opacity: '0', transform: 'translateY(-100%)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				shimmer: {
					'100%': {
						transform: 'translateX(100%)',
					},
				},
				blinker: {
					'0%': { opacity: '0.3' },
					'50%': { opacity: '1' },
					'100%': { opacity: '0.3' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-opacity': 'fade-in-opacity 1s ease-in',
				'enter-from-right': 'enter-from-right 1s ease-in',
				'enter-from-left': 'enter-from-left 1s ease-in',
				'enter-from-top': 'enter-from-top 1s ease-in',
				'enter-from-bottom': 'enter-from-bottom 1s ease-in',
				'scale-big-to-normal': 'scale-big-to-normal 1s ease-in',
				'blur-in': 'blur-in 1s ease-in',
				'hero-image-in': 'hero-image-in 1s ease-in',
				'slide-in': 'slide-in 1s ease-in',
				shimmer: 'shimmer 1s infinite linear',
				blinker: 'blinker 1s infinite linear',
			},
			fontFamily: {
				sans: ['var(--font-sans)', ...fontFamily.sans],
			},
			screens: {
				xxsm: '375px',
				xsm: '430px',
			},
			backgroundImage: {
				'portafolio-banner': 'url("/images/portafolio-banner-1.png")',
			},
			colors: {
				mbceYellow: {
					DEFAULT: '#F7B032',
					'50': '#fff9eb',
					'100': '#fdeec8',
					'200': '#fbdc8c',
					'300': '#f8c351',
					'400': '#f7b032',
					'500': '#f08b10',
					'600': '#d5660a',
					'700': '#b1460c',
					'800': '#8f3711',
					'900': '#762e11',
					'950': '#441504',
				},
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
