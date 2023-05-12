/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-red': '#D80032',
        'light-red': '#EF233C',
        'light-blue': '#EDF2F4',
        'med-blue': '#8D99AE',
        'dark-blue': '#2B2D42',
      }
    },
  },
  plugins: [],
}