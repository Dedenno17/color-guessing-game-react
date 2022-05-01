module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blueDefault' : '#38A3A5',
      },
      animation: {
        'go-down': 'goDown .3s ease-out forwards',
      },
      keyframes: {
        goDown : {
          '0%': { top: '-20px', opacity: 0 },
          '100%' : { top: '56px', opacity: 1 }
        }
      }
    },
  },
  plugins: [],
}
