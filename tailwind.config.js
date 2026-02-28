/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Bebas Neue'", "cursive"],
    },
      colors: {
        primary: '#FFD700',
        dark: '#212121',
      }
    },
  },
  plugins: [],
}