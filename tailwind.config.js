module.exports = {
  content: ['index.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        defaultFont: ['Outfit', 'sans-serif'],
      },
      colors: {
        mainBg: 'hsl(217, 54%, 11%)',
        cardBg: 'hsl(216, 50%, 16%)',
        line: 'hsl(215, 32%, 27%)',
        white: 'hsl(0, 0%, 100%)',
        softBlue: 'hsl(215, 51%, 70%)',
        accent: 'hsl(178, 100%, 50%)',
      },
      fontSize: {
        defaultFontSize: '18px',
      },
      fontWeight: {
        300: '300',
        400: '400',
        600: '600',
      },
    },
  },
  plugins: [],
}
