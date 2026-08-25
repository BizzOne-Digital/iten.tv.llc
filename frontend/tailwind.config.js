/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#030303',
        elevated: '#090909',
        card: '#101010',
        brand: {
          red: '#E10600',
          brightred: '#FF1616',
        },
        white: '#F5F5F5',
        gray: {
          DEFAULT: '#A5A5A5',
        },
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        display: ['Rajdhani', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
