/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'headerFont': ['Libre Franklin', "serif"],
        'bodyFont': ['Libre Baskerville', "sans-serif"],
      },
      backgroundImage: {
        'heroImg': ['url(./assets/Poster.png)']
      },
      flex: {
        '3': '3 3 0%'
      }
    },
  },
  plugins: [],
}

