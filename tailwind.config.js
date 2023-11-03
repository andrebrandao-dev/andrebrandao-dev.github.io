/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  theme: {
    extend: {
      screens: {
        'smaller-sm': { max: '639px' },
        'smaller-md': { max: '767px' },
        'smaller-lg': { max: '1023px' },
      }
    }
  }
}