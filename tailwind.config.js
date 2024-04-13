/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        nav: '#2C3E50',
        page: '#ECEFF1',
        card: '#FFFFFF',
        'card-hover': '#E0E0E0',
        'default-text': '#37474f',
        'nav-text': '#FFFFFF',
        'blue-accent': '#55ACEE',
        'blue-accent-hover': '#3498DB',
      },
    },
  },
  plugins: [],
};
