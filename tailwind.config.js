
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Spectral"', 'serif'],
        arabic: ['"Noto Naskh Arabic"', 'serif'],
      },
      colors: {
        cream: '#FBF8F3',
        'pale-blue': '#E8F1F5',
        'text-primary': '#2C2C2C',
        'text-secondary': '#5B5B5B',
        'accent-blue': '#8B9DC3',
      },
      backgroundImage: {
        'poetic-gradient': 'linear-gradient(180deg, #FBF8F3 0%, #E8F1F5 100%)',
      }
    },
  },
  plugins: [],
}
