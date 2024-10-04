/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./development.html"],
  theme: {
    extend: {
      colors: {
        primary: "#cad748",
        secondary: "#53519e",
      },
      fontFamily: {
        tnr: ["Times New Roman", "sans-serif"],
      },
    },
  },
  plugins: [],
};
