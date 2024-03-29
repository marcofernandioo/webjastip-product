module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: { 
      'xs': '475px',
      // ...defaultTheme.screens
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
