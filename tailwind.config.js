/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 👈 Enables class-based dark mode
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}', // covers Astro files
    './public/**/*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
