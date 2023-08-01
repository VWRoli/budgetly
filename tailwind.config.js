/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#ff3e00',
				secondary: 'rgba(0, 0, 0, 0.87)',
			},
		},
	},
	plugins: [],
};
