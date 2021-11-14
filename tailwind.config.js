module.exports = {
  mode: "jit",
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        "screen-nonav": "calc(100vh - 88px)",
      },
      maxWidth: {
        '128px': '128px',
      },
      fontFamily: {
        genshinFont: "genshinFont",
      },
      backgroundImage:{
        'oneStar': "url('./src/assets/rarity/bg_rarity_1_star.png')",
        'twoStar': "url('./src/assets/rarity/bg_rarity_2_star.png')",
        'threeStar': "url('./src/assets/rarity/bg_rarity_3_star.png')",
        'fourStar': "url('./src/assets/rarity/bg_rarity_4_star.png')",
        'fiveStar': "url('./src/assets/rarity/bg_rarity_5_star.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
