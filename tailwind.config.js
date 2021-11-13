module.exports = {
  mode: "jit",
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        "screen-nonav": "calc(100vh - 88px)",
      },
      fontFamily: {
        genshinFont: "genshinFont",
      },
      backgroundImage: {
        'one-star': "url=('src\assets\rarity\bg_rarity_1_star.png')",
        'two-star': "url=('src\assets\rarity\bg_rarity_2_star.png')",
        'three-star': "url=('src\assets\rarity\bg_rarity_3_star.png')",
        'four-star': "url=('src\assets\rarity\bg_rarity_4_star.png')",
        'five-star': "url=('src\assets\rarity\bg_rarity_5_star.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
