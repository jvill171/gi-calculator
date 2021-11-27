import { ref } from "vue";

const ALL_CHARACTERS = {
  Albedo: {
    name: "Albedo",
    rarity: 5,
    element: { name: "Geo", image: "/elements/geo.png" },
    gems: {
      name: "Prithiva Topaz",
      image: {
        levelOne: "/ascension/jewels/prithiva-topaz-sliver.png",
        levelTwo: "/ascension/jewels/prithiva-topaz-fragment.png",
        levelThree: "/ascension/jewels/prithiva-topaz-chunk.png",
        levelFour: "/ascension/jewels/prithiva-topaz-gemstone.png",
      },
    },
    weapon: { name: "Sword", image: "/weapons/sword.png" },
    image: "/characters_full/albedo.png",
    icon: "/characters_icon/albedo.png",
    bossMat: {
      name: "Basalt Pillar",
      image: "/ascension/elemental/basalt-pillar.png",
    },
    specialty: { name: "", image: "" },
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
  Aloy: {
    name: "Aloy",
    rarity: 5,
    element: { name: "Cryo", image: "/elements/cryo.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        levelOne: "/ascension/jewels/shivada-jade-sliver.png",
        levelTwo: "/ascension/jewels/shivada-jade-fragment.png",
        levelThree: "/ascension/jewels/shivada-jade-chunk.png",
        levelFour: "/ascension/jewels/shivada-jade-gemstone.png",
      },
    },
    weapon: { name: "Bow", image: "/weapons/bow.png" },
    image: "/characters_full/aloy.png",
    icon: "/characters_icon/aloy.png",
    bossMat: {
      name: "Crystalline Bloom",
      image: "/ascension/elemental/crystalline-bloom.png",
    },
    specialty: { name: "", image: "" },
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
  Amber: {
    name: "Amber",
    rarity: 4,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        levelOne: "/ascension/jewels/agnidus-agate-sliver.png",
        levelTwo: "/ascension/jewels/agnidus-agate-fragment.png",
        levelThree: "/ascension/jewels/agnidus-agate-chunk.png",
        levelFour: "/ascension/jewels/agnidus-agate-gemstone.png",
      },
    },
    weapon: { name: "Bow", image: "/weapons/bow.png" },
    image: "/characters_full/amber.png",
    icon: "/characters_icon/amber.png",
    bossMat: {
      name: "Everflame Seed",
      image: "/ascension/elemental/everflame-seed.png",
    },
    specialty: { name: "", image: "" },
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
  Ayaka: {
    name: "Ayaka",
    rarity: 5,
    element: { name: "Cryo", image: "/elements/cryo.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        levelOne: "/ascension/jewels/shivada-jade-sliver.png",
        levelTwo: "/ascension/jewels/shivada-jade-fragment.png",
        levelThree: "/ascension/jewels/shivada-jade-chunk.png",
        levelFour: "/ascension/jewels/shivada-jade-gemstone.png",
      },
    },
    weapon: { name: "Sword", image: "/weapons/sword.png" },
    image: "/characters_full/ayaka.png",
    icon: "/characters_icon/ayaka.png",
    bossMat: {
      name: "Perpetual Heart",
      image: "/ascension/elemental/perpetual-heart.png",
    },
    specialty: { name: "", image: "" },
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
  Barbara: {
    name: "Barbara",
    rarity: 4,
    element: { name: "Hydro", image: "/elements/hydro.png" },
    gems: {
      name: "Varunada Lazurite",
      image: {
        levelOne: "/ascension/jewels/varunada-lazurite-sliver.png",
        levelTwo: "/ascension/jewels/varunada-lazurite-fragment.png",
        levelThree: "/ascension/jewels/varunada-lazurite-chunk.png",
        levelFour: "/ascension/jewels/varunada-lazurite-gemstone.png",
      },
    },
    weapon: { name: "Catalyst", image: "/weapons/catalyst.png" },
    image: "/characters_full/barbara.png",
    icon: "/characters_icon/barbara.png",
    bossMat: {
      name: "Cleansing Heart",
      image: "/ascension/elemental/cleansing-heart.png",
    },
    specialty: { name: "", image: "" },
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
  Beidou: {
    name: "Beidou",
    rarity: 4,
    element: { name: "Electro", image: "/elements/electro.png" },
    gems: {
      name: "Vajrada Amethyst",
      image: {
        levelOne: "/ascension/jewels/vajrada-amethyst-sliver.png",
        levelTwo: "/ascension/jewels/vajrada-amethyst-fragment.png",
        levelThree: "/ascension/jewels/vajrada-amethyst-chunk.png",
        levelFour: "/ascension/jewels/vajrada-amethyst-gemstone.png",
      },
    },
    weapon: { name: "Claymore", image: "/weapons/claymore.png" },
    image: "/characters_full/beidou.png",
    icon: "/characters_icon/beidou.png",
    bossMat: {
      name: "Lightning Prism",
      image: "/ascension/elemental/lightning-prism.png",
    },
    specialty: { name: "", image: "" },
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
  Bennett: {
    name: "Bennett",
    rarity: 4,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        levelOne: "/ascension/jewels/agnidus-agate-sliver.png",
        levelTwo: "/ascension/jewels/agnidus-agate-fragment.png",
        levelThree: "/ascension/jewels/agnidus-agate-chunk.png",
        levelFour: "/ascension/jewels/agnidus-agate-gemstone.png",
      },
    },
    weapon: { name: "Sword", image: "/weapons/sword.png" },
    image: "/characters_full/bennett.png",
    icon: "/characters_icon/bennett.png",
    bossMat: {
      name: "Everflame Seed",
      image: "/ascension/elemental/everflame-seed.png",
    },
    specialty: { name: "", image: "" },
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
  Chongyun: {
    name: "Chongyun",
    rarity: 4,
    element: { name: "Cryo", image: "/elements/cryo.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        levelOne: "/ascension/jewels/shivada-jade-sliver.png",
        levelTwo: "/ascension/jewels/shivada-jade-fragment.png",
        levelThree: "/ascension/jewels/shivada-jade-chunk.png",
        levelFour: "/ascension/jewels/shivada-jade-gemstone.png",
      },
    },
    weapon: { name: "Claymore", image: "/weapons/claymore.png" },
    image: "/characters_full/chongyun.png",
    icon: "/characters_icon/chongyun.png",
    bossMat: {
      name: "Hoarfrost Core",
      image: "/ascension/elemental/hoarfrost-core.png",
    },
    specialty: { name: "", image: "" },
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
  Diluc: {
    name: "Diluc",
    rarity: 5,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        levelOne: "/ascension/jewels/agnidus-agate-sliver.png",
        levelTwo: "/ascension/jewels/agnidus-agate-fragment.png",
        levelThree: "/ascension/jewels/agnidus-agate-chunk.png",
        levelFour: "/ascension/jewels/agnidus-agate-gemstone.png",
      },
    },
    weapon: { name: "Claymore", image: "/weapons/claymore.png" },
    image: "/characters_full/diluc.png",
    icon: "/characters_icon/diluc.png",
    bossMat: {
      name: "Everflame Seed",
      image: "/ascension/elemental/everflame-seed.png",
    },
    specialty: { name: "", image: "" },
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
  Diona: {
    name: "Diona",
    rarity: 4,
    element: { name: "Cryo", image: "/elements/cryo.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        levelOne: "/ascension/jewels/shivada-jade-sliver.png",
        levelTwo: "/ascension/jewels/shivada-jade-fragment.png",
        levelThree: "/ascension/jewels/shivada-jade-chunk.png",
        levelFour: "/ascension/jewels/shivada-jade-gemstone.png",
      },
    },
    weapon: { name: "Bow", image: "/weapons/bow.png" },
    image: "/characters_full/diona.png",
    icon: "/characters_icon/diona.png",
    bossMat: {
      name: "Hoarfrost Core",
      image: "/ascension/elemental/hoarfrost-core.png",
    },
    specialty: { name: "", image: "" },
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
  Eula: {
    name: "Eula",
    rarity: 5,
    element: { name: "Cryo", image: "/elements/cryo.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        levelOne: "/ascension/jewels/shivada-jade-sliver.png",
        levelTwo: "/ascension/jewels/shivada-jade-fragment.png",
        levelThree: "/ascension/jewels/shivada-jade-chunk.png",
        levelFour: "/ascension/jewels/shivada-jade-gemstone.png",
      },
    },
    weapon: { name: "Claymore", image: "/weapons/claymore.png" },
    image: "/characters_full/eula.png",
    icon: "/characters_icon/eula.png",
    bossMat: {
      name: "Crystalline Bloom",
      image: "/ascension/elemental/crystalline-bloom.png",
    },
    specialty: { name: "", image: "" },
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
  Fischl: {
    name: "Fischl",
    rarity: 4,
    element: { name: "Electro", image: "/elements/electro.png" },
    gems: {
      name: "Vajrada Amethyst",
      image: {
        levelOne: "/ascension/jewels/vajrada-amethyst-sliver.png",
        levelTwo: "/ascension/jewels/vajrada-amethyst-fragment.png",
        levelThree: "/ascension/jewels/vajrada-amethyst-chunk.png",
        levelFour: "/ascension/jewels/vajrada-amethyst-gemstone.png",
      },
    },
    weapon: { name: "Bow", image: "/weapons/bow.png" },
    image: "/characters_full/fischl.png",
    icon: "/characters_icon/fischl.png",
    bossMat: {
      name: "Lightning Prism",
      image: "/ascension/elemental/lightning-prism.png",
    },
    specialty: { name: "", image: "" },
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
  Ganyu: {
    name: "Ganyu",
    rarity: 5,
    element: { name: "Cryo", image: "/elements/cryo.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        levelOne: "/ascension/jewels/shivada-jade-sliver.png",
        levelTwo: "/ascension/jewels/shivada-jade-fragment.png",
        levelThree: "/ascension/jewels/shivada-jade-chunk.png",
        levelFour: "/ascension/jewels/shivada-jade-gemstone.png",
      },
    },
    weapon: { name: "Bow", image: "/weapons/bow.png" },
    image: "/characters_full/ganyu.png",
    icon: "/characters_icon/ganyu.png",
    bossMat: {
      name: "Hoarfrost Core",
      image: "/ascension/elemental/hoarfrost-core.png",
    },
    specialty: { name: "", image: "" },
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
  "Hu Tao": {
    name: "Hu Tao",
    rarity: 5,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        levelOne: "/ascension/jewels/agnidus-agate-sliver.png",
        levelTwo: "/ascension/jewels/agnidus-agate-fragment.png",
        levelThree: "/ascension/jewels/agnidus-agate-chunk.png",
        levelFour: "/ascension/jewels/agnidus-agate-gemstone.png",
      },
    },
    weapon: { name: "Polearm", image: "/weapons/polearm.png" },
    image: "/characters_full/hu-tao.png",
    icon: "/characters_icon/hu-tao.png",
    bossMat: {
      name: "Juvenile Jade",
      image: "/ascension/elemental/juvenile-jade.png",
    },
    specialty: { name: "", image: "" },
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
  Jean: {
    name: "Jean",
    rarity: 5,
    element: { name: "Anemo", image: "/elements/anemo.png" },
    gems: {
      name: "Vayuda Turquoise",
      image: {
        levelOne: "/ascension/jewels/vayuda-turquoise-sliver.png",
        levelTwo: "/ascension/jewels/vayuda-turquoise-fragment.png",
        levelThree: "/ascension/jewels/vayuda-turquoise-chunk.png",
        levelFour: "/ascension/jewels/vayuda-turquoise-gemstone.png",
      },
    },
    weapon: { name: "Sword", image: "/weapons/sword.png" },
    image: "/characters_full/jean.png",
    icon: "/characters_icon/jean.png",
    bossMat: {
      name: "Hurricane Seed",
      image: "/ascension/elemental/hurricane-seed.png",
    },
    specialty: { name: "", image: "" },
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
  Kaeya: {
    name: "Kaeya",
    rarity: 4,
    element: { name: "Cryo", image: "/elements/cryo.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        levelOne: "/ascension/jewels/shivada-jade-sliver.png",
        levelTwo: "/ascension/jewels/shivada-jade-fragment.png",
        levelThree: "/ascension/jewels/shivada-jade-chunk.png",
        levelFour: "/ascension/jewels/shivada-jade-gemstone.png",
      },
    },
    weapon: { name: "Sword", image: "/weapons/sword.png" },
    image: "/characters_full/kaeya.png",
    icon: "/characters_icon/kaeya.png",
    bossMat: {
      name: "Hoarfrost Core",
      image: "/ascension/elemental/hoarfrost-core.png",
    },
    specialty: { name: "", image: "" },
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
  Kazuha: {
    name: "Kazuha",
    rarity: 5,
    element: { name: "Anemo", image: "/elements/anemo.png" },
    gems: {
      name: "Vayuda Turquoise",
      image: {
        levelOne: "/ascension/jewels/vayuda-turquoise-sliver.png",
        levelTwo: "/ascension/jewels/vayuda-turquoise-fragment.png",
        levelThree: "/ascension/jewels/vayuda-turquoise-chunk.png",
        levelFour: "/ascension/jewels/vayuda-turquoise-gemstone.png",
      },
    },
    weapon: { name: "Sword", image: "/weapons/sword.png" },
    image: "/characters_full/kazuha.png",
    icon: "/characters_icon/kazuha.png",
    bossMat: {
      name: "Marionette Core",
      image: "/ascension/elemental/maguu-kishin.png",
    },
    specialty: { name: "", image: "" },
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
  Keqing: {
    name: "Keqing",
    rarity: 5,
    element: { name: "Electro", image: "/elements/electro.png" },
    gems: {
      name: "Vajrada Amethyst",
      image: {
        levelOne: "/ascension/jewels/vajrada-amethyst-sliver.png",
        levelTwo: "/ascension/jewels/vajrada-amethyst-fragment.png",
        levelThree: "/ascension/jewels/vajrada-amethyst-chunk.png",
        levelFour: "/ascension/jewels/vajrada-amethyst-gemstone.png",
      },
    },
    weapon: { name: "Sword", image: "/weapons/sword.png" },
    image: "/characters_full/keqing.png",
    icon: "/characters_icon/keqing.png",
    bossMat: {
      name: "Lightning Prism",
      image: "/ascension/elemental/lightning-prism.png",
    },
    specialty: { name: "", image: "" },
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
  Klee: {
    name: "Klee",
    rarity: 5,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        levelOne: "/ascension/jewels/agnidus-agate-sliver.png",
        levelTwo: "/ascension/jewels/agnidus-agate-fragment.png",
        levelThree: "/ascension/jewels/agnidus-agate-chunk.png",
        levelFour: "/ascension/jewels/agnidus-agate-gemstone.png",
      },
    },
    weapon: { name: "Catalyst", image: "/weapons/catalyst.png" },
    image: "/characters_full/klee.png",
    icon: "/characters_icon/klee.png",
    bossMat: {
      name: "Everflame Seed",
      image: "/ascension/elemental/everflame-seed.png",
    },
    specialty: { name: "", image: "" },
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
  Kokomi: {
    name: "Kokomi",
    rarity: 5,
    element: { name: "Hydro", image: "/elements/hydro.png" },
    gems: {
      name: "Varunada Lazurite",
      image: {
        levelOne: "/ascension/jewels/varunada-lazurite-sliver.png",
        levelTwo: "/ascension/jewels/varunada-lazurite-fragment.png",
        levelThree: "/ascension/jewels/varunada-lazurite-chunk.png",
        levelFour: "/ascension/jewels/varunada-lazurite-gemstone.png",
      },
    },
    weapon: { name: "Catalyst", image: "/weapons/catalyst.png" },
    image: "/characters_full/kokomi.png",
    icon: "/characters_icon/kokomi.png",
    bossMat: {
      name: "Dew of Repudiation",
      image: "/ascension/elemental/dew-of-repudiation.png",
    },
    specialty: { name: "", image: "" },
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
  Lisa: {
    name: "Lisa",
    rarity: 4,
    element: { name: "Electro", image: "/elements/electro.png" },
    gems: {
      name: "Vajrada Amethyst",
      image: {
        levelOne: "/ascension/jewels/vajrada-amethyst-sliver.png",
        levelTwo: "/ascension/jewels/vajrada-amethyst-fragment.png",
        levelThree: "/ascension/jewels/vajrada-amethyst-chunk.png",
        levelFour: "/ascension/jewels/vajrada-amethyst-gemstone.png",
      },
    },
    weapon: { name: "Catalyst", image: "/weapons/catalyst.png" },
    image: "/characters_full/lisa.png",
    icon: "/characters_icon/lisa.png",
    bossMat: {
      name: "Lightning Prism",
      image: "/ascension/elemental/lightning-prism.png",
    },
    specialty: { name: "", image: "" },
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
  Mona: {
    name: "Mona",
    rarity: 5,
    element: { name: "Hydro", image: "/elements/hydro.png" },
    gems: {
      name: "Varunada Lazurite",
      image: {
        levelOne: "/ascension/jewels/varunada-lazurite-sliver.png",
        levelTwo: "/ascension/jewels/varunada-lazurite-fragment.png",
        levelThree: "/ascension/jewels/varunada-lazurite-chunk.png",
        levelFour: "/ascension/jewels/varunada-lazurite-gemstone.png",
      },
    },
    weapon: { name: "Catalyst", image: "/weapons/catalyst.png" },
    image: "/characters_full/mona.png",
    icon: "/characters_icon/mona.png",
    bossMat: {
      name: "Cleansing Heart",
      image: "/ascension/elemental/cleansing-heart.png",
    },
    specialty: { name: "", image: "" },
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
  Ningguang: {
    name: "Ningguang",
    rarity: 4,
    element: { name: "Geo", image: "/elements/geo.png" },
    gems: {
      name: "Prithiva Topaz",
      image: {
        levelOne: "/ascension/jewels/prithiva-topaz-sliver.png",
        levelTwo: "/ascension/jewels/prithiva-topaz-fragment.png",
        levelThree: "/ascension/jewels/prithiva-topaz-chunk.png",
        levelFour: "/ascension/jewels/prithiva-topaz-gemstone.png",
      },
    },
    weapon: { name: "Catalyst", image: "/weapons/catalyst.png" },
    image: "/characters_full/ningguang.png",
    icon: "/characters_icon/ningguang.png",
    bossMat: {
      name: "Basalt Pillar",
      image: "/ascension/elemental/basalt-pillar.png",
    },
    specialty: { name: "", image: "" },
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
  Noelle: {
    name: "Noelle",
    rarity: 4,
    element: { name: "Geo", image: "/elements/geo.png" },
    gems: {
      name: "Prithiva Topaz",
      image: {
        levelOne: "/ascension/jewels/prithiva-topaz-sliver.png",
        levelTwo: "/ascension/jewels/prithiva-topaz-fragment.png",
        levelThree: "/ascension/jewels/prithiva-topaz-chunk.png",
        levelFour: "/ascension/jewels/prithiva-topaz-gemstone.png",
      },
    },
    weapon: { name: "Claymore", image: "/weapons/claymore.png" },
    image: "/characters_full/noelle.png",
    icon: "/characters_icon/noelle.png",
    bossMat: {
      name: "Basalt Pillar",
      image: "/ascension/elemental/basalt-pillar.png",
    },
    specialty: { name: "", image: "" },
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
  Qiqi: {
    name: "Qiqi",
    rarity: 5,
    element: { name: "Cryo", image: "/elements/cryo.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        levelOne: "/ascension/jewels/shivada-jade-sliver.png",
        levelTwo: "/ascension/jewels/shivada-jade-fragment.png",
        levelThree: "/ascension/jewels/shivada-jade-chunk.png",
        levelFour: "/ascension/jewels/shivada-jade-gemstone.png",
      },
    },
    weapon: { name: "Sword", image: "/weapons/sword.png" },
    image: "/characters_full/qiqi.png",
    icon: "/characters_icon/qiqi.png",
    bossMat: {
      name: "Hoarfrost Core",
      image: "/ascension/elemental/hoarfrost-core.png",
    },
    specialty: { name: "", image: "" },
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
  Raiden: {
    name: "Raiden",
    rarity: 5,
    element: { name: "Electro", image: "/elements/electro.png" },
    gems: {
      name: "Vajrada Amethyst",
      image: {
        levelOne: "/ascension/jewels/vajrada-amethyst-sliver.png",
        levelTwo: "/ascension/jewels/vajrada-amethyst-fragment.png",
        levelThree: "/ascension/jewels/vajrada-amethyst-chunk.png",
        levelFour: "/ascension/jewels/vajrada-amethyst-gemstone.png",
      },
    },
    weapon: { name: "Polearm", image: "/weapons/polearm.png" },
    image: "/characters_full/raiden.png",
    icon: "/characters_icon/raiden.png",
    bossMat: {
      name: "Storm Beads",
      image: "/ascension/elemental/storm-beads.png",
    },
    specialty: { name: "", image: "" },
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
  Razor: {
    name: "Razor",
    rarity: 4,
    element: { name: "Electro", image: "/elements/electro.png" },
    gems: {
      name: "Vajrada Amethyst",
      image: {
        levelOne: "/ascension/jewels/vajrada-amethyst-sliver.png",
        levelTwo: "/ascension/jewels/vajrada-amethyst-fragment.png",
        levelThree: "/ascension/jewels/vajrada-amethyst-chunk.png",
        levelFour: "/ascension/jewels/vajrada-amethyst-gemstone.png",
      },
    },
    weapon: { name: "Claymore", image: "/weapons/claymore.png" },
    image: "/characters_full/razor.png",
    icon: "/characters_icon/razor.png",
    bossMat: {
      name: "Lightning Prism",
      image: "/ascension/elemental/lightning-prism.png",
    },
    specialty: { name: "", image: "" },
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
  Rosaria: {
    name: "Rosaria",
    rarity: 4,
    element: { name: "Cryo", image: "/elements/cryo.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        levelOne: "/ascension/jewels/shivada-jade-sliver.png",
        levelTwo: "/ascension/jewels/shivada-jade-fragment.png",
        levelThree: "/ascension/jewels/shivada-jade-chunk.png",
        levelFour: "/ascension/jewels/shivada-jade-gemstone.png",
      },
    },
    weapon: { name: "Polearm", image: "/weapons/polearm.png" },
    image: "/characters_full/rosaria.png",
    icon: "/characters_icon/rosaria.png",
    bossMat: {
      name: "Hoarfrost Core",
      image: "/ascension/elemental/hoarfrost-core.png",
    },
    specialty: { name: "", image: "" },
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
  Sara: {
    name: "Sara",
    rarity: 4,
    element: { name: "Electro", image: "/elements/electro.png" },
    gems: {
      name: "Vajrada Amethyst",
      image: {
        levelOne: "/ascension/jewels/vajrada-amethyst-sliver.png",
        levelTwo: "/ascension/jewels/vajrada-amethyst-fragment.png",
        levelThree: "/ascension/jewels/vajrada-amethyst-chunk.png",
        levelFour: "/ascension/jewels/vajrada-amethyst-gemstone.png",
      },
    },
    weapon: { name: "Bow", image: "/weapons/bow.png" },
    image: "/characters_full/sara.png",
    icon: "/characters_icon/sara.png",
    bossMat: { name: "", image: "" },
    specialty: { name: "", image: "" },
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
  Sayu: {
    name: "Sayu",
    rarity: 4,
    element: { name: "Anemo", image: "/elements/anemo.png" },
    gems: {
      name: "Vayuda Turquoise",
      image: {
        levelOne: "/ascension/jewels/vayuda-turquoise-sliver.png",
        levelTwo: "/ascension/jewels/vayuda-turquoise-fragment.png",
        levelThree: "/ascension/jewels/vayuda-turquoise-chunk.png",
        levelFour: "/ascension/jewels/vayuda-turquoise-gemstone.png",
      },
    },
    weapon: { name: "Claymore", image: "/weapons/claymore.png" },
    image: "/characters_full/sayu.png",
    icon: "/characters_icon/sayu.png",
    bossMat: {
      name: "Marionette Core",
      image: "/ascension/elemental/maguu-kishin.png",
    },
    specialty: { name: "", image: "" },
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
  Sucrose: {
    name: "Sucrose",
    rarity: 4,
    element: { name: "Anemo", image: "/elements/anemo.png" },
    gems: {
      name: "Vayuda Turquoise",
      image: {
        levelOne: "/ascension/jewels/vayuda-turquoise-sliver.png",
        levelTwo: "/ascension/jewels/vayuda-turquoise-fragment.png",
        levelThree: "/ascension/jewels/vayuda-turquoise-chunk.png",
        levelFour: "/ascension/jewels/vayuda-turquoise-gemstone.png",
      },
    },
    weapon: { name: "Catalyst", image: "/weapons/catalyst.png" },
    image: "/characters_full/sucrose.png",
    icon: "/characters_icon/sucrose.png",
    bossMat: {
      name: "Hurricane Seed",
      image: "/ascension/elemental/hurricane-seed.png",
    },
    specialty: { name: "", image: "" },
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
  Tartaglia: {
    name: "Tartaglia",
    rarity: 5,
    element: { name: "Hydro", image: "/elements/hydro.png" },
    gems: {
      name: "Varunada Lazurite",
      image: {
        levelOne: "/ascension/jewels/varunada-lazurite-sliver.png",
        levelTwo: "/ascension/jewels/varunada-lazurite-fragment.png",
        levelThree: "/ascension/jewels/varunada-lazurite-chunk.png",
        levelFour: "/ascension/jewels/varunada-lazurite-gemstone.png",
      },
    },
    weapon: { name: "Bow", image: "/weapons/bow.png" },
    image: "/characters_full/tartaglia.png",
    icon: "/characters_icon/tartaglia.png",
    bossMat: {
      name: "Cleansing Heart",
      image: "/ascension/elemental/cleansing-heart.png",
    },
    specialty: { name: "", image: "" },
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
  //   image: "/characters_full/traveler.png",
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
    gems: {
      name: "Vayuda Turquoise",
      image: {
        levelOne: "/ascension/jewels/vayuda-turquoise-sliver.png",
        levelTwo: "/ascension/jewels/vayuda-turquoise-fragment.png",
        levelThree: "/ascension/jewels/vayuda-turquoise-chunk.png",
        levelFour: "/ascension/jewels/vayuda-turquoise-gemstone.png",
      },
    },
    weapon: { name: "Bow", image: "/weapons/bow.png" },
    image: "/characters_full/venti.png",
    icon: "/characters_icon/venti.png",
    bossMat: {
      name: "Hurricane Seed",
      image: "/ascension/elemental/hurricane-seed.png",
    },
    specialty: { name: "", image: "" },
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
  Xiangling: {
    name: "Xiangling",
    rarity: 4,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        levelOne: "/ascension/jewels/agnidus-agate-sliver.png",
        levelTwo: "/ascension/jewels/agnidus-agate-fragment.png",
        levelThree: "/ascension/jewels/agnidus-agate-chunk.png",
        levelFour: "/ascension/jewels/agnidus-agate-gemstone.png",
      },
    },
    weapon: { name: "Polearm", image: "/weapons/polearm.png" },
    image: "/characters_full/xiangling.png",
    icon: "/characters_icon/xiangling.png",
    bossMat: {
      name: "Everflame Seed",
      image: "/ascension/elemental/everflame-seed.png",
    },
    specialty: { name: "", image: "" },
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
  Xiao: {
    name: "Xiao",
    rarity: 5,
    element: { name: "Anemo", image: "/elements/anemo.png" },
    gems: {
      name: "Vayuda Turquoise",
      image: {
        levelOne: "/ascension/jewels/vayuda-turquoise-sliver.png",
        levelTwo: "/ascension/jewels/vayuda-turquoise-fragment.png",
        levelThree: "/ascension/jewels/vayuda-turquoise-chunk.png",
        levelFour: "/ascension/jewels/vayuda-turquoise-gemstone.png",
      },
    },
    weapon: { name: "Polearm", image: "/weapons/polearm.png" },
    image: "/characters_full/xiao.png",
    icon: "/characters_icon/xiao.png",
    bossMat: {
      name: "Juvenile Jade",
      image: "/ascension/elemental/juvenile-jade.png",
    },
    specialty: { name: "", image: "" },
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
  Xingqiu: {
    name: "Xingqiu",
    rarity: 4,
    element: { name: "Hydro", image: "/elements/hydro.png" },
    gems: {
      name: "Varunada Lazurite",
      image: {
        levelOne: "/ascension/jewels/varunada-lazurite-sliver.png",
        levelTwo: "/ascension/jewels/varunada-lazurite-fragment.png",
        levelThree: "/ascension/jewels/varunada-lazurite-chunk.png",
        levelFour: "/ascension/jewels/varunada-lazurite-gemstone.png",
      },
    },
    weapon: { name: "Sword", image: "/weapons/sword.png" },
    image: "/characters_full/xingqiu.png",
    icon: "/characters_icon/xingqiu.png",
    bossMat: {
      name: "Cleansing Heart",
      image: "/ascension/elemental/cleansing-heart.png",
    },
    specialty: { name: "", image: "" },
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
  Xinyan: {
    name: "Xinyan",
    rarity: 4,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        levelOne: "/ascension/jewels/agnidus-agate-sliver.png",
        levelTwo: "/ascension/jewels/agnidus-agate-fragment.png",
        levelThree: "/ascension/jewels/agnidus-agate-chunk.png",
        levelFour: "/ascension/jewels/agnidus-agate-gemstone.png",
      },
    },
    weapon: { name: "Claymore", image: "/weapons/claymore.png" },
    image: "/characters_full/xinyan.png",
    icon: "/characters_icon/xinyan.png",
    bossMat: {
      name: "Everflame Seed",
      image: "/ascension/elemental/everflame-seed.png",
    },
    specialty: { name: "", image: "" },
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
  Yanfei: {
    name: "Yanfei",
    rarity: 4,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        levelOne: "/ascension/jewels/agnidus-agate-sliver.png",
        levelTwo: "/ascension/jewels/agnidus-agate-fragment.png",
        levelThree: "/ascension/jewels/agnidus-agate-chunk.png",
        levelFour: "/ascension/jewels/agnidus-agate-gemstone.png",
      },
    },
    weapon: { name: "Catalyst", image: "/weapons/catalyst.png" },
    image: "/characters_full/yanfei.png",
    icon: "/characters_icon/yanfei.png",
    bossMat: {
      name: "Juvenile Jade",
      image: "/ascension/elemental/juvenile-jade.png",
    },
    specialty: { name: "", image: "" },
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
  Yoimiya: {
    name: "Yoimiya",
    rarity: 5,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        levelOne: "/ascension/jewels/agnidus-agate-sliver.png",
        levelTwo: "/ascension/jewels/agnidus-agate-fragment.png",
        levelThree: "/ascension/jewels/agnidus-agate-chunk.png",
        levelFour: "/ascension/jewels/agnidus-agate-gemstone.png",
      },
    },
    weapon: { name: "Bow", image: "/weapons/bow.png" },
    image: "/characters_full/yoimiya.png",
    icon: "/characters_icon/yoimiya.png",
    bossMat: {
      name: "Smoldering Pearl",
      image: "/ascension/elemental/smoldering-pearl.png",
    },
    specialty: { name: "", image: "" },
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
  Zhongli: {
    name: "Zhongli",
    rarity: 5,
    element: { name: "Geo", image: "/elements/geo.png" },
    gems: {
      name: "Prithiva Topaz",
      image: {
        levelOne: "/ascension/jewels/prithiva-topaz-sliver.png",
        levelTwo: "/ascension/jewels/prithiva-topaz-fragment.png",
        levelThree: "/ascension/jewels/prithiva-topaz-chunk.png",
        levelFour: "/ascension/jewels/prithiva-topaz-gemstone.png",
      },
    },
    weapon: { name: "Polearm", image: "/weapons/polearm.png" },
    image: "/characters_full/zhongli.png",
    icon: "/characters_icon/zhongli.png",
    bossMat: {
      name: "Basalt Pillar",
      image: "/ascension/elemental/basalt-pillar.png",
    },
    specialty: { name: "", image: "" },
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
};

export const useLocal = () => {
  const getCharacter = (picked) => {
    const myCharacter = ALL_CHARACTERS[picked];
    return myCharacter;
  };

  const localRare = (picked) => {
    const myRarity = ALL_CHARACTERS[picked].rarity;
    return myRarity;
  };
  const localElement = (picked) => {
    const myElement = picked.element;
  };
  const localWeapon = (picked) => {
    const myWeapon = picked.weapon;
  };

  return {
    ALL_CHARACTERS,
    getCharacter,
    localRare,
    localElement,
    localWeapon,
  };
};
