module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scale: {
        "101": "1.01",
      },
      transformOrigin: {
        "0": "0%",
      }, 
    },
  },
  variants: {
    extend: {

      
    },
  },
  plugins: [],
}
