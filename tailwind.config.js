const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme('fontSize.3xl'),
          fontWeight: theme('fontWeight.bold'),
        },
        h2: {
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.semibold'),
        },
        h3: {
          fontSize: theme('fontSize.lg'),
          fontWeight: theme('fontWeight.semibold'),
        },
        h4: {
          fontWeight: theme('fontWeight.semibold'),
        },
      })
    }),
  ],
}
