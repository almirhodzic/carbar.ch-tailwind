/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],

  darkMode: 'class', // or 'media' or 'class'

  theme: {
    debugScreens: {
      position: ['bottom', 'left'],
    },
    extend: {
      colors : {
        maincolor : '#ff0080',
        maincolorhover : '#d8066f',
        backgroundcolor : '#fad3d9',
        backgrounddark : '#05080e'
        },
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}
