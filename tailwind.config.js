/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./index.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2A9D8F",
        secondary: "#E9C46A",
        accent: "#F4A261",
        danger: "#E76F51",
      },
    },
  },
  plugins: [],
};
