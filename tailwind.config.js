module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cultured': '#fbfbfb',
        'dCultured': '#f5f5f5',
        'maximumBlue':'#48BCBD',
        'myrtleGreen': '#317A7B',
        'richDBlue': '#193839',
        'eireBlack': '#141414',
        'black': '#000000',
        'quickSilver': '#A3A3A3',
        'red600': '#DC2626'
      },
      margin: {
        'FleftTright': '80%',
        'FleftTright2': '70%',
        'FleftTright3': '20%'
      },
      width: {
        'halfScreen': '50vw'
      },
      boxShadow: {
        green: '0 10px 15px -3px rgba(25, 56, 57, 0.3), 0 10px 10px -3px rgba(25, 56, 57, 0.05)',
      }
    }, 
  },
  variants: {
    extend: {
      borderRadius: ['hover', 'focus']
    },
  },
  plugins: [],
}
