import { ref } from "vue";

const ALL_CHARACTERS = {
  Albedo: {
    name: "Albedo",
    rarity: 5,
    element: { name: "Geo", image: "/elements/geo.png" },
    weapon: { name: "Sword", image: "/weapons/sword.png" },
    image: "/characters/albedo.png",
    icon: "/characters_icon/albedo.png",
  },
  Aloy: {
    name: "Aloy",
    rarity: 5,
    element: { name: "Cryo", image: "/elements/cryo.png" },
    weapon: { name: "Bow", image: "/weapons/bow.png" },
    image: "/characters/aloy.png",
    icon: "/characters_icon/aloy.png",
  },
  Amber: {
    name: "Amber",
    rarity: 4,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    weapon: { name: "Bow", image: "/weapons/bow.png" },
    image: "/characters/amber.png",
    icon: "/characters_icon/amber.png",
  },
  Ayaka: {
    name: "Ayaka",
    rarity: 5,
    element: { name: "Cryo", image: "/elements/cryo.png" },
    weapon: { name: "Sword", image: "/weapons/sword.png" },
    image: "/characters/ayaka.png",
    icon: "/characters_icon/ayaka.png",
  },
  Barbara: {
    name: "Barbara",
    rarity: 4,
    element: { name: "Hydro", image: "/elements/hydro.png" },
    weapon: { name: "Catalyst", image: "/weapons/catalyst.png" },
    image: "/characters/barbara.png",
    icon: "/characters_icon/barbara.png",
  },
  Beidou: {
    name: "Beidou",
    rarity: 4,
    element: { name: "Electro", image: "/elements/electro.png" },
    weapon: { name: "Claymore", image: "/weapons/claymore.png" },
    image: "/characters/beidou.png",
    icon: "/characters_icon/beidou.png",
  },
  Bennett: {
    name: "Bennett",
    rarity: 4,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    weapon: { name: "Sword", image: "/weapons/sword.png" },
    image: "/characters/bennett.png",
    icon: "/characters_icon/bennett.png",
  },
  Chongyun: {
    name: "Chongyun",
    rarity: 4,
    element: { name: "Cryo", image: "/elements/cryo.png" },
    weapon: { name: "Claymore", image: "/weapons/claymore.png" },
    image: "/characters/chongyun.png",
    icon: "/characters_icon/chongyun.png",
  },
  Diluc: {
    name: "Diluc",
    rarity: 5,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    weapon: { name: "Claymore", image: "/weapons/claymore.png" },
    image: "/characters/diluc.png",
    icon: "/characters_icon/diluc.png",
  },
  Diona: {
    name: "Diona",
    rarity: 4,
    element: { name: "Cryo", image: "/elements/cryo.png" },
    weapon: { name: "Bow", image: "/weapons/bow.png" },
    image: "/characters/diona.png",
    icon: "/characters_icon/diona.png",
  },
  Eula: {
    name: "Eula",
    rarity: 5,
    element: { name: "Cryo", image: "/elements/cryo.png" },
    weapon: { name: "Claymore", image: "/weapons/claymore.png" },
    image: "/characters/eula.png",
    icon: "/characters_icon/eula.png",
  },
  Fischl: {
    name: "Fischl",
    rarity: 4,
    element: { name: "Electro", image: "/elements/electro.png" },
    weapon: { name: "Bow", image: "/weapons/bow.png" },
    image: "/characters/fischl.png",
    icon: "/characters_icon/fischl.png",
  },
  Ganyu: {
    name: "Ganyu",
    rarity: 5,
    element: { name: "Cryo", image: "/elements/cryo.png" },
    weapon: { name: "Bow", image: "/weapons/bow.png" },
    image: "/characters/ganyu.png",
    icon: "/characters_icon/ganyu.png",
  },
  "Hu Tao": {
    name: "Hu Tao",
    rarity: 5,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    weapon: { name: "Polearm", image: "/weapons/polearm.png" },
    image: "/characters/hu-tao.png",
    icon: "/characters_icon/hu-tao.png",
  },
  Jean: {
    name: "Jean",
    rarity: 5,
    element: { name: "Anemo", image: "/elements/anemo.png" },
    weapon: { name: "Sword", image: "/weapons/sword.png" },
    image: "/characters/jean.png",
    icon: "/characters_icon/jean.png",
  },
  Kaeya: {
    name: "Kaeya",
    rarity: 4,
    element: { name: "Cryo", image: "/elements/cryo.png" },
    weapon: { name: "Sword", image: "/weapons/sword.png" },
    image: "/characters/kaeya.png",
    icon: "/characters_icon/kaeya.png",
  },
  Kazuha: {
    name: "Kazuha",
    rarity: 5,
    element: { name: "Anemo", image: "/elements/anemo.png" },
    weapon: { name: "Sword", image: "/weapons/sword.png" },
    image: "/characters/kazuha.png",
    icon: "/characters_icon/kazuha.png",
  },
  Keqing: {
    name: "Keqing",
    rarity: 5,
    element: { name: "Electro", image: "/elements/electro.png" },
    weapon: { name: "Sword", image: "/weapons/sword.png" },
    image: "/characters/keqing.png",
    icon: "/characters_icon/keqing.png",
  },
  Klee: {
    name: "Klee",
    rarity: 5,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    weapon: { name: "Catalyst", image: "/weapons/catalyst.png" },
    image: "/characters/klee.png",
    icon: "/characters_icon/klee.png",
  },
  Kokomi: {
    name: "Kokomi",
    rarity: 5,
    element: { name: "Hydro", image: "/elements/hydro.png" },
    weapon: { name: "Catalyst", image: "/weapons/catalyst.png" },
    image: "/characters/kokomi.png",
    icon: "/characters_icon/kokomi.png",
  },
  Lisa: {
    name: "Lisa",
    rarity: 4,
    element: { name: "Electro", image: "/elements/electro.png" },
    weapon: { name: "Catalyst", image: "/weapons/catalyst.png" },
    image: "/characters/lisa.png",
    icon: "/characters_icon/lisa.png",
  },
  Mona: {
    name: "Mona",
    rarity: 5,
    element: { name: "Hydro", image: "/elements/hydro.png" },
    weapon: { name: "Catalyst", image: "/weapons/catalyst.png" },
    image: "/characters/mona.png",
    icon: "/characters_icon/mona.png",
  },
  Ningguang: {
    name: "Ningguang",
    rarity: 4,
    element: { name: "Geo", image: "/elements/geo.png" },
    weapon: { name: "Catalyst", image: "/weapons/catalyst.png" },
    image: "/characters/ningguang.png",
    icon: "/characters_icon/ningguang.png",
  },
  Noelle: {
    name: "Noelle",
    rarity: 4,
    element: { name: "Geo", image: "/elements/geo.png" },
    weapon: { name: "Claymore", image: "/weapons/claymore.png" },
    image: "/characters/noelle.png",
    icon: "/characters_icon/noelle.png",
  },
  Qiqi: {
    name: "Qiqi",
    rarity: 5,
    element: { name: "Cryo", image: "/elements/cryo.png" },
    weapon: { name: "Sword", image: "/weapons/sword.png" },
    image: "/characters/qiqi.png",
    icon: "/characters_icon/qiqi.png",
  },
  Raiden: {
    name: "Raiden",
    rarity: 5,
    element: { name: "Electro", image: "/elements/electro.png" },
    weapon: { name: "Polearm", image: "/weapons/polearm.png" },
    image: "/characters/raiden.png",
    icon: "/characters_icon/raiden.png",
  },
  Razor: {
    name: "Razor",
    rarity: 4,
    element: { name: "Electro", image: "/elements/electro.png" },
    weapon: { name: "Claymore", image: "/weapons/claymore.png" },
    image: "/characters/razor.png",
    icon: "/characters_icon/razor.png",
  },
  Rosaria: {
    name: "Rosaria",
    rarity: 4,
    element: { name: "Cryo", image: "/elements/cryo.png" },
    weapon: { name: "Polearm", image: "/weapons/polearm.png" },
    image: "/characters/rosaria.png",
    icon: "/characters_icon/rosaria.png",
  },
  Sara: {
    name: "Sara",
    rarity: 4,
    element: { name: "Electro", image: "/elements/electro.png" },
    weapon: { name: "Bow", image: "/weapons/bow.png" },
    image: "/characters/sara.png",
    icon: "/characters_icon/sara.png",
  },
  Sayu: {
    name: "Sayu",
    rarity: 4,
    element: { name: "Anemo", image: "/elements/anemo.png" },
    weapon: { name: "Claymore", image: "/weapons/claymore.png" },
    image: "/characters/sayu.png",
    icon: "/characters_icon/sayu.png",
  },
  Sucrose: {
    name: "Sucrose",
    rarity: 4,
    element: { name: "Anemo", image: "/elements/anemo.png" },
    weapon: { name: "Catalyst", image: "/weapons/catalyst.png" },
    image: "/characters/sucrose.png",
    icon: "/characters_icon/sucrose.png",
  },
  Tartaglia: {
    name: "Tartaglia",
    rarity: 5,
    element: { name: "Hydro", image: "/elements/hydro.png" },
    weapon: { name: "Bow", image: "/weapons/bow.png" },
    image: "/characters/tartaglia.png",
    icon: "/characters_icon/tartaglia.png",
  },
  // Traveler: {
  //   name: "Traveler",
  //   rarity: 5,
  //   element: { name: "Adaptive", image: "/elements/adaptive.png" },
  //   gems: {
  //     name: "Brilliant Diamond",
  //     image: {
  //       levelOne: "/ascension/jewels/brilliant-diamond-sliver.png",
  //       levelTwo: "/ascension/jewels/brilliant-diamond-fragment.png",
  //       levelThree: "/ascension/jewels/brilliant-diamond-chunk.png",
  //       levelFour: "/ascension/jewels/brilliant-diamond-gemstone.png",
  //     },
  //   },
  //   weapon: { name: "Sword", image: "/weapons/sword.png" },
  //   image: "/characters/traveler.png",
  //   icon: "/characters_icon/traveler.png",
  //   bossMat: { name: "", image: "" },
  //   specialty: { name: "", image: "" },
  //   books: {
  //     levelOne: {
  //       name: "Teachings of ",
  //       image: "/ascension/talents/teachings-of-.png",
  //     },
  //     levelTwo: {
  //       name: "Guide to ",
  //       image: "/ascension/talents/guide-to-.png",
  //     },
  //     levelThree: {
  //       name: "Philosophies of",
  //       image: "/ascension/talents/philosophies-of-.png",
  //     },
  //   },
  // },
  Venti: {
    name: "Venti",
    rarity: 5,
    element: { name: "Anemo", image: "/elements/anemo.png" },
    weapon: { name: "Bow", image: "/weapons/bow.png" },
    image: "/characters/venti.png",
    icon: "/characters_icon/venti.png",
  },
  Xiangling: {
    name: "Xiangling",
    rarity: 4,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    weapon: { name: "Polearm", image: "/weapons/polearm.png" },
    image: "/characters/xiangling.png",
    icon: "/characters_icon/xiangling.png",
  },
  Xiao: {
    name: "Xiao",
    rarity: 5,
    element: { name: "Anemo", image: "/elements/anemo.png" },
    weapon: { name: "Polearm", image: "/weapons/polearm.png" },
    image: "/characters/xiao.png",
    icon: "/characters_icon/xiao.png",
  },
  Xingqiu: {
    name: "Xingqiu",
    rarity: 4,
    element: { name: "Hydro", image: "/elements/hydro.png" },
    weapon: { name: "Sword", image: "/weapons/sword.png" },
    image: "/characters/xingqiu.png",
    icon: "/characters_icon/xingqiu.png",
  },
  Xinyan: {
    name: "Xinyan",
    rarity: 4,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    weapon: { name: "Claymore", image: "/weapons/claymore.png" },
    image: "/characters/xinyan.png",
    icon: "/characters_icon/xinyan.png",
  },
  Yanfei: {
    name: "Yanfei",
    rarity: 4,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    weapon: { name: "Catalyst", image: "/weapons/catalyst.png" },
    image: "/characters/yanfei.png",
    icon: "/characters_icon/yanfei.png",
  },
  Yoimiya: {
    name: "Yoimiya",
    rarity: 5,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    weapon: { name: "Bow", image: "/weapons/bow.png" },
    image: "/characters/yoimiya.png",
    icon: "/characters_icon/yoimiya.png",
  },
  Zhongli: {
    name: "Zhongli",
    rarity: 5,
    element: { name: "Geo", image: "/elements/geo.png" },
    weapon: { name: "Polearm", image: "/weapons/polearm.png" },
    image: "/characters/zhongli.png",
    icon: "/characters_icon/zhongli.png",
  },
};

const ALL_ELEMENTS = {
  Anemo: {
    elementCharacters: ["Jean", "Kazuha", "Sayu", "Sucrose", "Venti", "Xiao"],
    name: "Anemo",
    gems: {
      levelOne: {
        name: "Vayuda Turquoise Sliver",
        image: "/ascension/jewels/vayuda-turquoise-sliver.png",
      },
      levelTwo: {
        name: "Vayuda Turquoise Fragment",
        image: "/ascension/jewels/vayuda-turquoise-fragment.png",
      },
      levelThree: {
        name: "Vayuda Turquoise Chunk",
        image: "/ascension/jewels/vayuda-turquoise-chunk.png",
      },
      levelFour: {
        name: "Vayuda Turquoise Gemstone",
        image: "/ascension/jewels/vayuda-turquoise-gemstone.png",
      },
    },
  },
  Pyro: {
    elementCharacters: [
      "Amber",
      "Bennett",
      "Diluc",
      "Hu Tao",
      "Klee",
      "Xiangling",
      "Xinyan",
      "Yanfei",
      "Yoimiya",
    ],
    name: "Pyro",
    gems: {
      levelOne: {
        name: "Shivada Jade Sliver",
        image: "/ascension/jewels/agnidus-agate-sliver.png",
      },
      levelTwo: {
        name: "Shivada Jade Fragment",
        image: "/ascension/jewels/agnidus-agate-fragment.png",
      },
      levelThree: {
        name: "Shivada Jade Chunk",
        image: "/ascension/jewels/agnidus-agate-chunk.png",
      },
      levelFour: {
        name: "Shivada Jade Gemstone",
        image: "/ascension/jewels/agnidus-agate-gemstone.png",
      },
    },
  },
  Geo: {
    elementCharacters: ["Albedo", "Ningguang", "Noelle", "Zhongli"],
    name: "Geo",
    gems: {
      levelOne: {
        name: "Prithiva Topaz Sliver",
        image: "/ascension/jewels/prithiva-topaz-sliver.png",
      },
      levelTwo: {
        name: "Prithiva Topaz Fragment",
        image: "/ascension/jewels/prithiva-topaz-fragment.png",
      },
      levelThree: {
        name: "Prithiva Topaz Chunk",
        image: "/ascension/jewels/prithiva-topaz-chunk.png",
      },
      levelFour: {
        name: "Prithiva Topaz Gemstone",
        image: "/ascension/jewels/prithiva-topaz-gemstone.png",
      },
    },
  },
  Hydro: {
    elementCharacters: ["Barbara", "Mona", "Kokomi", "Tartaglia", "Xingqiu"],
    name: "Hydro",
    gems: {
      levelOne: {
        name: "Varunada Lazurite Sliver",
        image: "/ascension/jewels/varunada-lazurite-sliver.png",
      },
      levelTwo: {
        name: "Varunada Lazurite Fragment",
        image: "/ascension/jewels/varunada-lazurite-fragment.png",
      },
      levelThree: {
        name: "Varunada Lazurite Chunk",
        image: "/ascension/jewels/varunada-lazurite-chunk.png",
      },
      levelFour: {
        name: "Varunada Lazurite Gemstone",
        image: "/ascension/jewels/varunada-lazurite-gemstone.png",
      },
    },
  },
  Cryo: {
    elementCharacters: [
      "Aloy",
      "Chongyun",
      "Diona",
      "Eula",
      "Ganyu",
      "Kaeya",
      "Ayaka",
      "Qiqi",
      "Rosaria",
    ],
    name: "Cryo",
    gems: {
      levelOne: {
        name: "Shivada Jade Sliver",
        image: "/ascension/jewels/shivada-jade-sliver.png",
      },
      levelTwo: {
        name: "Shivada Jade Fragment",
        image: "/ascension/jewels/shivada-jade-fragment.png",
      },
      levelThree: {
        name: "Shivada Jade Chunk",
        image: "/ascension/jewels/shivada-jade-chunk.png",
      },
      levelFour: {
        name: "Shivada Jade Gemstone",
        image: "/ascension/jewels/shivada-jade-gemstone.png",
      },
    },
  },
  Electro: {
    elementCharacters: [
      "Beidou",
      "Fischl",
      "Keqing",
      "Sara",
      "Lisa",
      "Raiden",
      "Razor",
    ],
    name: "Electro",
    gems: {
      levelOne: {
        name: "Vajrada Amethyst Sliver",
        image: "/ascension/jewels/vajrada-amethyst-sliver.png",
      },
      levelTwo: {
        name: "Vajrada Amethyst Fragment",
        image: "/ascension/jewels/vajrada-amethyst-fragment.png",
      },
      levelThree: {
        name: "Vajrada Amethyst Chunk",
        image: "/ascension/jewels/vajrada-amethyst-chunk.png",
      },
      levelFour: {
        name: "Vajrada Amethyst Gemstone",
        image: "/ascension/jewels/vajrada-amethyst-gemstone.png",
      },
    },
  },
};

const TALENT_BOOKS = {
  Freedom: {
    name: "Freedom",
    bookCharacters: [
      "Aloy",
      "Klee",
      "Tartaglia",
      "Amber",
      "Barbara",
      "Diona",
      "Sucrose",
    ],
    books: {
      levelOne: {
        name: "Teachings of Freedom",
        image: "/ascension/talents/teachings-of-freedom.png",
      },
      levelTwo: {
        name: "Guide to Freedom",
        image: "/ascension/talents/guide-to-freedom.png",
      },
      levelThree: {
        name: "Philosophies of Freedom",
        image: "/ascension/talents/philosophies-of-freedom.png",
      },
    },
  },
  Resistance: {
    name: "Resistance",
    bookCharacters: [
      "Diluc",
      "Eula",
      "Jean",
      "Mona",
      "Bennett",
      "Noelle",
      "Razor",
    ],
    books: {
      levelOne: {
        name: "Teachings of Resistance",
        image: "/ascension/talents/teachings-of-resistance.png",
      },
      levelTwo: {
        name: "Guide to Resistance",
        image: "/ascension/talents/guide-to-resistance.png",
      },
      levelThree: {
        name: "Philosophies of Resistance",
        image: "/ascension/talents/philosophies-of-resistance.png",
      },
    },
  },
  Ballad: {
    name: "Ballad",
    bookCharacters: ["Albedo", "Venti", "Fischl", "Kaeya", "Lisa", "Rosaria"],
    books: {
      levelOne: {
        name: "Teachings of Ballad",
        image: "/ascension/talents/teachings-of-ballad.png",
      },
      levelTwo: {
        name: "Guide to Ballad",
        image: "/ascension/talents/guide-to-ballad.png",
      },
      levelThree: {
        name: "Philosophies of Ballad",
        image: "/ascension/talents/philosophies-of-ballad.png",
      },
    },
  },
  Prosperity: {
    name: "Prosperity",
    bookCharacters: ["Keqing", "Qiqi", "Xiao", "Ningguang"],
    books: {
      levelOne: {
        name: "Teachings of Prosperity",
        image: "/ascension/talents/teachings-of-prosperity.png",
      },
      levelTwo: {
        name: "Guide to Prosperity",
        image: "/ascension/talents/guide-to-prosperity.png",
      },
      levelThree: {
        name: "Philosophies of Prosperity",
        image: "/ascension/talents/philosophies-of-prosperity.png",
      },
    },
  },
  Diligence: {
    name: "Diligence",
    bookCharacters: ["Ganyu", "Hu Tao", "Kazuha", "Chongyun", "Xiangling"],
    books: {
      levelOne: {
        name: "Teachings of Diligence",
        image: "/ascension/talents/teachings-of-diligence.png",
      },
      levelTwo: {
        name: "Guide to Diligence",
        image: "/ascension/talents/guide-to-diligence.png",
      },
      levelThree: {
        name: "Philosophies of Diligence",
        image: "/ascension/talents/philosophies-of-diligence.png",
      },
    },
  },
  Gold: {
    name: "Gold",
    bookCharacters: ["Zhongli", "Beidou", "Xingqiu", "Xinyan", "Yanfei"],
    books: {
      levelOne: {
        name: "Teachings of Gold",
        image: "/ascension/talents/teachings-of-gold.png",
      },
      levelTwo: {
        name: "Guide to Gold",
        image: "/ascension/talents/guide-to-gold.png",
      },
      levelThree: {
        name: "Philosophies of Gold",
        image: "/ascension/talents/philosophies-of-gold.png",
      },
    },
  },
  Transience: {
    name: "Transience",
    bookCharacters: ["Kokomi", "Yoimiya", "Thoma"],
    books: {
      levelOne: {
        name: "Teachings of Transience",
        image: "/ascension/talents/teachings-of-transience.png",
      },
      levelTwo: {
        name: "Guide to Transience",
        image: "/ascension/talents/guide-to-transience.png",
      },
      levelThree: {
        name: "Philosophies of Transience",
        image: "/ascension/talents/philosophies-of-transience.png",
      },
    },
  },
  Elegance: {
    name: "Elegance",
    bookCharacters: ["Ayaka", "Sara"],
    books: {
      levelOne: {
        name: "Teachings of Elegance",
        image: "/ascension/talents/teachings-of-elegance.png",
      },
      levelTwo: {
        name: "Guide to Elegance",
        image: "/ascension/talents/guide-to-elegance.png",
      },
      levelThree: {
        name: "Philosophies of Elegance",
        image: "/ascension/talents/philosophies-of-elegance.png",
      },
    },
  },
  Light: {
    name: "Light",
    bookCharacters: ["Raiden", "Sayu"],
    books: {
      levelOne: {
        name: "Teachings of Light",
        image: "/ascension/talents/teachings-of-light.png",
      },
      levelTwo: {
        name: "Guide to Light",
        image: "/ascension/talents/guide-to-light.png",
      },
      levelThree: {
        name: "Philosophies of Light",
        image: "/ascension/talents/philosophies-of-light.png",
      },
    },
  },
};

const BOSS_MATERIAL = {
  "Hurricane Seed": {
    bossCharacters: ["Jean", "Venti", "Sucrose"],
    name: "Hurricane Seed",
    image: "/ascension/elemental/hurricane-seed.png",
  },
  "Lightning Prism": {
    bossCharacters: ["Keqing", "Beidou", "Fischl", "Lisa", "Razor"],
    name: "Lightning Prism",
    image: "/ascension/elemental/lightning-prism.png",
  },
  "Basalt Pillar": {
    bossCharacters: ["Albedo", "Zhongli", "Ningguang", "Noelle"],
    name: "Basalt Pillar",
    image: "/ascension/elemental/basalt-pillar.png",
  },
  "Hoarfrost Core": {
    bossCharacters: ["Ganyu", "Qiqi", "Chongyun", "Diona", "Kaeya", "Rosaria"],
    name: "Hoarfrost Core",
    image: "/ascension/elemental/hoarfrost-core.png",
  },
  "Everflame Seed": {
    bossCharacters: [
      "Diluc",
      "Klee",
      "Amber",
      "Bennett",
      "Xiangling",
      "Xinyan",
    ],
    name: "Everflame Seed",
    image: "/ascension/elemental/everflame-seed.png",
  },
  "Cleansing Heart": {
    bossCharacters: ["Mona", "Tartaglia", "Barbara", "Xingqiu"],
    name: "Cleansing Heart",
    image: "/ascension/elemental/cleansing-heart.png",
  },
  "Juvenile Jade": {
    bossCharacters: ["Hu Tao", "Xiao", "Yanfei"],
    name: "Juvenile Jade",
    image: "/ascension/elemental/juvenile-jade.png",
  },
  "Crystalline Bloom": {
    bossCharacters: ["Aloy", "Eula"],
    name: "Crystalline Bloom",
    image: "/ascension/elemental/crystalline-bloom.png",
  },
  "Marionette Core": {
    bossCharacters: ["Kazuha", "Sayu"],
    name: "Marionette Core",
    image: "/ascension/elemental/maguu-kishin.png",
  },
  "Perpetual Heart": {
    bossCharacters: ["Ayaka"],
    name: "Perpetual Heart",
    image: "/ascension/elemental/perpetual-heart.png",
  },
  "Smoldering Pearl": {
    bossCharacters: ["Yoimiya"],
    name: "Smoldering Pearl",
    image: "/ascension/elemental/smoldering-pearl.png",
  },
  "Dew of Repudiation": {
    bossCharacters: ["Kokomi"],
    name: "Dew of Repudiation",
    image: "/ascension/elemental/dew-of-repudiation.png",
  },
  "Storm Beads": {
    bossCharacters: ["Raiden", "Sara"],
    name: "Storm Beads",
    image: "/ascension/elemental/storm-beads.png",
  },
};

const SPECIALTY_ITEMS = {
  "Calla Lily": {
    specialtyCharacters: ["Diona", "Kaeya"],
    name: "Calla Lily",
    image: "/ascension/local/calla-lily.png",
  },
  Wolfhook: {
    specialtyCharacters: ["Razor"],
    name: "Wolfhook",
    image: "/ascension/local/wolfhook.png",
  },
  Valberry: {
    specialtyCharacters: ["Lisa", "Noelle", "Rosaria"],
    name: "Valberry",
    image: "/ascension/local/valberry.png",
  },
  Cecilia: {
    specialtyCharacters: ["Albedo", "Venti"],
    name: "Cecilia",
    image: "/ascension/local/cecilia.png",
  },
  "Windwheel Aster": {
    specialtyCharacters: ["Bennett", "Sucrose"],
    name: "Windwheel Aster",
    image: "/ascension/local/windwheel-aster.png",
  },
  "Philanemo Mushroom": {
    specialtyCharacters: ["Klee", "Mona", "Barbara"],
    name: "Philanemo Mushroom",
    image: "/ascension/local/.png",
  },
  "Small Lamp Grass": {
    specialtyCharacters: ["Diluc", "Amber", "Fischl"],
    name: "Small Lamp Grass",
    image: "/ascension/local/small-lamp-grass.png",
  },
  "Dandelion Seed": {
    specialtyCharacters: ["Eula", "Jean"],
    name: "Dandelion Seed",
    image: "/ascension/local/dandelion-seed.png",
  },
  "Jueyun Chili": {
    specialtyCharacters: ["Xiangling"],
    name: "Jueyun Chili",
    image: "/ascension/local/jueyun-chili.png",
  },
  "Noctilucous Jade": {
    specialtyCharacters: ["Beidou", "Yanfei"],
    name: "Noctilucous Jade",
    image: "/ascension/local/noctilucous-jade.png",
  },
  "Silk Flower": {
    specialtyCharacters: ["Hu Tao", "Xingqiu"],
    name: "Silk Flower",
    image: "/ascension/local/silk-flower.png",
  },
  "Glaze Lily": {
    specialtyCharacters: ["Ningguang"],
    name: "Glaze Lily",
    image: "/ascension/local/glaze-lily.png",
  },
  Qingxin: {
    specialtyCharacters: ["Ganyu", "Xiao"],
    name: "Qingxin",
    image: "/ascension/local/qingxin.png",
  },
  Starconch: {
    specialtyCharacters: ["Tartaglia"],
    name: "Starconch",
    image: "/ascension/local/starconch.png",
  },
  Violetgrass: {
    specialtyCharacters: ["Qiqi", "Xinyan"],
    name: "Violetgrass",
    image: "/ascension/local/violetgrass.png",
  },
  "Cor Lapis": {
    specialtyCharacters: ["Keqing", "Zhongli", "Chongyun"],
    name: "Cor Lapis",
    image: "/ascension/local/cor-lapis.png",
  },
  "Sakura Bloom": {
    specialtyCharacters: ["Ayaka"],
    name: "Sakura Bloom",
    image: "/ascension/local/sakura-bloom.png",
  },
  "Crystal Marrow": {
    specialtyCharacters: ["Aloy", "Sayu"],
    name: "Crystal Marrow",
    image: "/ascension/local/crystal-marrow.png",
  },
  Dendrobium: {
    specialtyCharacters: ["Sara"],
    name: "Dendrobium",
    image: "/ascension/local/dendrobium.png",
  },
  "Naku Weed": {
    specialtyCharacters: ["Yoimiya"],
    name: "Naku Weed",
    image: "/ascension/local/naku-weed.png",
  },
  "Sea Ganoderma": {
    specialtyCharacters: ["Kazuha"],
    name: "Sea Ganoderma",
    image: "/ascension/local/sea-ganoderma.png",
  },
  "Sango Pearl": {
    specialtyCharacters: ["Kokomi"],
    name: "Sango Pearl",
    image: "/ascension/local/sango-pearl.png",
  },
  "Amakumo Fruit": {
    specialtyCharacters: ["Raiden"],
    name: "Amakumo Fruit",
    image: "/ascension/local/amakumo-fruit.png",
  },
};

export const useLocal = () => {
  const getCharacter = (picked) => {
    const myCharacter = ALL_CHARACTERS[picked];
    return myCharacter;
  };

  const getBooks = (picked) => {
    const keys = Object.keys(TALENT_BOOKS);
    let i = 0;
    keys.every((key, index) => {
      if (TALENT_BOOKS[key].bookCharacters.includes(picked)) {
        return false;
      } else {
        i++;
        return true;
      }
    });
    console.log("a");
    console.log(TALENT_BOOKS[keys[i]].books);
    console.log("a");

    return TALENT_BOOKS[keys[i]].books;
  };

  const getJewels = (picked) => {
    const keys = Object.keys(ALL_ELEMENTS);
    let i = 0;
    keys.every((key, index) => {
      if (ALL_ELEMENTS[key].elementCharacters.includes(picked)) {
        return false;
      } else {
        i++;
        return true;
      }
    });
    return ALL_ELEMENTS[keys[i]].gems;
  };

  const getBoss = (picked) => {
    const keys = Object.keys(BOSS_MATERIAL);
    let i = 0;
    keys.every((key, index) => {
      if (BOSS_MATERIAL[key].bossCharacters.includes(picked)) {
        return false;
      } else {
        i++;
        return true;
      }
    });
    return BOSS_MATERIAL[keys[i]];
  };

  const getSpecialty = (picked) => {
    const keys = Object.keys(SPECIALTY_ITEMS);
    let i = 0;
    keys.every((key, index) => {
      if (SPECIALTY_ITEMS[key].specialtyCharacters.includes(picked)) {
        return false;
      } else {
        i++;
        return true;
      }
    });
    console.log(SPECIALTY_ITEMS[keys[i]]);
    return SPECIALTY_ITEMS[keys[i]];
  };

  return {
    ALL_CHARACTERS,
    getCharacter,
    getBooks,
    getJewels,
    getBoss,
    getSpecialty,
  };
};
