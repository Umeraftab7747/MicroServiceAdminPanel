/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.js", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ['"Roboto Slab"', "serif"],
      body: ["Roboto", "sans-serif"],
    },
    boxShadow: {
      lg: "0px 0px 15px 0px rgba(0,0,0,0.1)",
    },
    colors: {
      ...colors,
      primary: "#FFA903",
      darkBlue: "#0B1674",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
