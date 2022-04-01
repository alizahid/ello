const colors = require('tailwindcss/colors')

module.exports = {
  content: ['src/**/*.tsx', 'src/styles/*.scss'],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.blue
      }
    },
    fontFamily: {
      body: ['Satoshi', 'sans-serif']
    }
  },
  plugins: []
}
