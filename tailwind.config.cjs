/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
       colors: {
      'primary':'#543BC9',
      'secondary':'#EBEAF5',
      'grey':'#757575',
      'border-color':'#707070',
      'deepgrey':'#212121'

    }},
      screens: {
        'xs': '320px',
        ...defaultTheme.screens,
      },
   
  },
  plugins: [],
}