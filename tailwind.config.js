/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pure-orange': '#ffb400',
      },
      height:{
        '2-full': '200vh'
      }
    },
  },
  plugins: [],
}