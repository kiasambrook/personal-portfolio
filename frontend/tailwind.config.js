/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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

