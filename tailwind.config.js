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
}