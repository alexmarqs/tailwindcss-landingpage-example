const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    fontFamily: {
      sans: [
        'Roboto',
        'sans-serif'
      ]
    },
    colors: {
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      primary: {
        light: colors.teal['400'],
        default: colors.teal['500'],
        dark: colors.teal['600']
      },
      secondary: {
        light: colors.gray['300'],
        default: colors.gray['600'],
        dark: colors.gray['700']
      }
    }
  },
  variants: {},
  plugins: []
};
