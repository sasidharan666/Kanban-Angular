/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        light:{
          "bg":"#F9FAFB",
          "text":"white"
        },
        dark:{
          "bg":"white"
        }
      }
    },
  },
  plugins: [],
}