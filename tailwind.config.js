/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: "#191439",
        "primary-light": "#464168",
      },
      colors: {
        blue: "#4400FF",
        "blue-light": "#2244FF",
        white: "#ffffff",
        sheet: "#F2F2F7",
      },
    },
  },
  plugins: [],
}
