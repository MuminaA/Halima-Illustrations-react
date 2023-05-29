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
      }
    },
  },
  plugins: [],
}

