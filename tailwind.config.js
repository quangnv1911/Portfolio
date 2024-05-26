/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pure-orange': '#ffb400',
        'hsla-border': 'hsla(0,0%,100%,.1'
      },
      height:{
        '2-full': '200vh'
      },
      gridColumn: {
        'span-20': 'span 20 / span 20',
      },
      fontFamily:{
        'title': ['Poppins','sans-serif'],
        'blur-title': ['Open Sans','YuGothic','sans-serif'],
      },
    },
    
  },
  plugins: [],
})