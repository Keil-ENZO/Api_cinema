/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./js/*.js", "./pages/*.html"],
  theme: {
    extend: {
      colors: {
        "colors-principal": "#B30000",
        "colors-secundario": "#333333",
        "colors-terciario": "#CCCCCC",
        "colors-cuaternario": "#000000",
        "colors-quintenario": "#FFFFFF",
      },

      fontFamily: {
        "font-family-principal": ["Oswald"],
        "font-family-secundario": ["Roboto"],
      },
    },
  },
  plugins: [],
};
