module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        reddit_dark: {
          DEFAULT: '#1a1a1b',
          brighter: '#272728',
          background: '#030303',
        },
        reddit_border: {
          DEFAULT: '#343536',
        }
      },
    },
  },
  variants: {
    
  },
  plugins: [],
}
