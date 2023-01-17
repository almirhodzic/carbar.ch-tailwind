/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],

  darkMode: 'class', // or 'media' or 'class'

  theme: {
    screens: {
    'xss': '320px',
    'xs': '360px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
    },
    debugScreens: {
      position: ['bottom', 'left'],
    },
    extend: {
      fontFamily: {
        'swanky': ['Swanky and Moo Moo', 'cursive'],
        'turncoat': ['Walter Turncoat', 'cursive'],
        'praise': ['Praise', 'cursive'],
      },
    colors : {
      'maincolor' : '#ff0080',
      'maincolorhover' : '#d8066f',
      'backgroundcolor' : '#fad3d9',
      'backgrounddark' : '#05080e'
      },
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('tw-elements/dist/plugin')
  ],
}
