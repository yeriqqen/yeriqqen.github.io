/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 👈 Enables class-based dark mode
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}', // covers Astro files
    './public/**/*.html',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: '#3b82f6',
              '&:hover': {
                color: '#1d4ed8',
              },
            },
            'h1, h2, h3, h4': {
              color: 'inherit',
            },
            code: {
              color: 'inherit',
              backgroundColor: '#f3f4f6',
              padding: '0.125rem 0.25rem',
              borderRadius: '0.25rem',
              fontWeight: '600',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#1f2937',
              color: '#f9fafb',
            },
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
            },
            blockquote: {
              color: 'inherit',
              borderLeftColor: '#3b82f6',
            },
          },
        },
        invert: {
          css: {
            color: 'inherit',
            a: {
              color: '#60a5fa',
              '&:hover': {
                color: '#93c5fd',
              },
            },
            'h1, h2, h3, h4': {
              color: 'inherit',
            },
            code: {
              backgroundColor: '#374151',
              color: 'inherit',
            },
            blockquote: {
              color: 'inherit',
              borderLeftColor: '#60a5fa',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
