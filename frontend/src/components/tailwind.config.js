/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ['"SpaceGrotesk"', "sans-serif"],
      },
      colors: {
        "pale-green": "#FEFFF0",
      },
    },
  },
  plugins: [],
}