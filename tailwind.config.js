module.exports = {
  content: ["src/**/*.jsx", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
         'bulb': "url('src/bulb.jpg')",
        'error1': "url('src/error1.png')"
      },
      skew: {
        '35': '35deg',
      },
      fontSize: {
      'xs': '128px',
    }
    },
  },
  plugins: [],
}
