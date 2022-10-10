/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./packages/renderer/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['black']
  },
  plugins: [require("daisyui")],
}