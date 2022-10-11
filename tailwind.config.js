/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./packages/renderer/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['black']
  },
  plugins: [require("daisyui")],
}