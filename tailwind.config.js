/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "416px",
        md: "810px",
        xl: "1300px",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      textColor: {
        primary: "#191439",
        "primary-light": "#464168",
        links: "#0099FF",
      },
      colors: {
        blue: "#4400FF",
        "blue-light": "#2244FF",
        "light-blue": "#0099FF",
        white: "#ffffff",
        sheet: "#F2F2F7",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
