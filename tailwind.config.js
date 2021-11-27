module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        "screen-nonav": "calc(100vh - 88px)",
      },
      maxWidth: {
        "128px": "128px",
      },
      fontFamily: {
        genshinFont: "genshinFont",
      },
      backgroundImage: {
        "1_star": "url('../../rarity/1_star.png')",
        "2_star": "url('../../rarity/2_star.png')",
        "3_star": "url('../../elements/cryo.png')",
        "4_star": "url('../../rarity/4_star.png')",
        "5_star": "url('../../rarity/5_star.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
