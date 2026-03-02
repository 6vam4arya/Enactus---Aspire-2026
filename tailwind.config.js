/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Bebas Neue'", "cursive"],
      },
      keyframes: {
        marqueeX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marqueeX linear infinite 10s",
      },
      colors: {
        primary: "#FFD700",
        dark: "#212121",
      },
    },
  },
  plugins: [],
};
