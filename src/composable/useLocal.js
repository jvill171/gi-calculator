import { ref } from "vue";

const ALL_CHARACTERS = {
  Albedo: {
    name: "Albedo",
    rarity: 5,
    element: { name: "Geo", image: "/elements/geo.png" },
    gems: {
      name: "Prithiva Topaz",
      image: {
        1: "/ascension/jewels/prithiva-topaz-sliver.png",
        2: "/ascension/jewels/prithiva-topaz-fragment.png",
        3: "/ascension/jewels/prithiva-topaz-chunk.png",
        4: "/ascension/jewels/prithiva-topaz-gemstone.png",
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
  },
  Aloy: {
    name: "Aloy",
    rarity: 5,
    element: { name: "Cyro", image: "/elements/cryo.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        1: "/ascension/jewels/shivada-jade-sliver.png",
        2: "/ascension/jewels/shivada-jade-fragment.png",
        3: "/ascension/jewels/shivada-jade-chunk.png",
        4: "/ascension/jewels/shivada-jade-gemstone.png",
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
  },
  Amber: {
    name: "Amber",
    rarity: 4,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        1: "/ascension/jewels/agnidus-agate-sliver.png",
        2: "/ascension/jewels/agnidus-agate-fragment.png",
        3: "/ascension/jewels/agnidus-agate-chunk.png",
        4: "/ascension/jewels/agnidus-agate-gemstone.png",
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
  },
  Ayaka: {
    name: "Ayaka",
    rarity: 5,
    element: { name: "Cyro", image: "/elements/cryo.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        1: "/ascension/jewels/shivada-jade-sliver.png",
        2: "/ascension/jewels/shivada-jade-fragment.png",
        3: "/ascension/jewels/shivada-jade-chunk.png",
        4: "/ascension/jewels/shivada-jade-gemstone.png",
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
  },
  Barbara: {
    name: "Barbara",
    rarity: 4,
    element: { name: "Hydro", image: "/elements/hydro.png" },
    gems: {
      name: "Varunada Lazurite",
      image: {
        1: "/ascension/jewels/varunada-lazurite-sliver.png",
        2: "/ascension/jewels/varunada-lazurite-fragment.png",
        3: "/ascension/jewels/varunada-lazurite-chunk.png",
        4: "/ascension/jewels/varunada-lazurite-gemstone.png",
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
  },
  Beidou: {
    name: "Beidou",
    rarity: 4,
    element: { name: "Electro", image: "/elements/electro.png" },
    gems: {
      name: "Vajrada Amethyst",
      image: {
        1: "/ascension/jewels/vajrada-amethyst-sliver.png",
        2: "/ascension/jewels/vajrada-amethyst-fragment.png",
        3: "/ascension/jewels/vajrada-amethyst-chunk.png",
        4: "/ascension/jewels/vajrada-amethyst-gemstone.png",
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
  },
  Bennett: {
    name: "Bennett",
    rarity: 4,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        1: "/ascension/jewels/agnidus-agate-sliver.png",
        2: "/ascension/jewels/agnidus-agate-fragment.png",
        3: "/ascension/jewels/agnidus-agate-chunk.png",
        4: "/ascension/jewels/agnidus-agate-gemstone.png",
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
  },
  Chongyun: {
    name: "Chongyun",
    rarity: 4,
    element: { name: "Cyro", image: "/elements/cryo.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        1: "/ascension/jewels/shivada-jade-sliver.png",
        2: "/ascension/jewels/shivada-jade-fragment.png",
        3: "/ascension/jewels/shivada-jade-chunk.png",
        4: "/ascension/jewels/shivada-jade-gemstone.png",
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
  },
  Diluc: {
    name: "Diluc",
    rarity: 5,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        1: "/ascension/jewels/agnidus-agate-sliver.png",
        2: "/ascension/jewels/agnidus-agate-fragment.png",
        3: "/ascension/jewels/agnidus-agate-chunk.png",
        4: "/ascension/jewels/agnidus-agate-gemstone.png",
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
  },
  Diona: {
    name: "Diona",
    rarity: 4,
    element: { name: "Cyro", image: "/elements/cryo.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        1: "/ascension/jewels/shivada-jade-sliver.png",
        2: "/ascension/jewels/shivada-jade-fragment.png",
        3: "/ascension/jewels/shivada-jade-chunk.png",
        4: "/ascension/jewels/shivada-jade-gemstone.png",
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
  },
  Eula: {
    name: "Eula",
    rarity: 5,
    element: { name: "Cyro", image: "/elements/cryo.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        1: "/ascension/jewels/shivada-jade-sliver.png",
        2: "/ascension/jewels/shivada-jade-fragment.png",
        3: "/ascension/jewels/shivada-jade-chunk.png",
        4: "/ascension/jewels/shivada-jade-gemstone.png",
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
  },
  Fischl: {
    name: "Fischl",
    rarity: 4,
    element: { name: "Electro", image: "/elements/electro.png" },
    gems: {
      name: "Vajrada Amethyst",
      image: {
        1: "/ascension/jewels/vajrada-amethyst-sliver.png",
        2: "/ascension/jewels/vajrada-amethyst-fragment.png",
        3: "/ascension/jewels/vajrada-amethyst-chunk.png",
        4: "/ascension/jewels/vajrada-amethyst-gemstone.png",
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
  },
  Ganyu: {
    name: "Ganyu",
    rarity: 5,
    element: { name: "Cyro", image: "/elements/cryo.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        1: "/ascension/jewels/shivada-jade-sliver.png",
        2: "/ascension/jewels/shivada-jade-fragment.png",
        3: "/ascension/jewels/shivada-jade-chunk.png",
        4: "/ascension/jewels/shivada-jade-gemstone.png",
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
  },
  "Hu Tao": {
    name: "Hu Tao",
    rarity: 5,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        1: "/ascension/jewels/agnidus-agate-sliver.png",
        2: "/ascension/jewels/agnidus-agate-fragment.png",
        3: "/ascension/jewels/agnidus-agate-chunk.png",
        4: "/ascension/jewels/agnidus-agate-gemstone.png",
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
  },
  Jean: {
    name: "Jean",
    rarity: 5,
    element: { name: "Anemo", image: "/elements/anemo.png" },
    gems: {
      name: "Vayuda Turquoise",
      image: {
        1: "/ascension/jewels/vayuda-turquoise-sliver.png",
        2: "/ascension/jewels/vayuda-turquoise-fragment.png",
        3: "/ascension/jewels/vayuda-turquoise-chunk.png",
        4: "/ascension/jewels/vayuda-turquoise-gemstone.png",
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
  },
  Kaeya: {
    name: "Kaeya",
    rarity: 4,
    element: { name: "Cyro", image: "/elements/cryo.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        1: "/ascension/jewels/shivada-jade-sliver.png",
        2: "/ascension/jewels/shivada-jade-fragment.png",
        3: "/ascension/jewels/shivada-jade-chunk.png",
        4: "/ascension/jewels/shivada-jade-gemstone.png",
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
  },
  Kazuha: {
    name: "Kazuha",
    rarity: 5,
    element: { name: "Anemo", image: "/elements/anemo.png" },
    gems: {
      name: "Vayuda Turquoise",
      image: {
        1: "/ascension/jewels/vayuda-turquoise-sliver.png",
        2: "/ascension/jewels/vayuda-turquoise-fragment.png",
        3: "/ascension/jewels/vayuda-turquoise-chunk.png",
        4: "/ascension/jewels/vayuda-turquoise-gemstone.png",
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
  },
  Keqing: {
    name: "Keqing",
    rarity: 5,
    element: { name: "Electro", image: "/elements/electro.png" },
    gems: {
      name: "Vajrada Amethyst",
      image: {
        1: "/ascension/jewels/vajrada-amethyst-sliver.png",
        2: "/ascension/jewels/vajrada-amethyst-fragment.png",
        3: "/ascension/jewels/vajrada-amethyst-chunk.png",
        4: "/ascension/jewels/vajrada-amethyst-gemstone.png",
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
  },
  Klee: {
    name: "Klee",
    rarity: 5,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        1: "/ascension/jewels/agnidus-agate-sliver.png",
        2: "/ascension/jewels/agnidus-agate-fragment.png",
        3: "/ascension/jewels/agnidus-agate-chunk.png",
        4: "/ascension/jewels/agnidus-agate-gemstone.png",
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
  },
  Kokomi: {
    name: "Kokomi",
    rarity: 5,
    element: { name: "Hydro", image: "/elements/hydro.png" },
    gems: {
      name: "Varunada Lazurite",
      image: {
        1: "/ascension/jewels/varunada-lazurite-sliver.png",
        2: "/ascension/jewels/varunada-lazurite-fragment.png",
        3: "/ascension/jewels/varunada-lazurite-chunk.png",
        4: "/ascension/jewels/varunada-lazurite-gemstone.png",
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
  },
  Lisa: {
    name: "Lisa",
    rarity: 4,
    element: { name: "Electro", image: "/elements/electro.png" },
    gems: {
      name: "Vajrada Amethyst",
      image: {
        1: "/ascension/jewels/vajrada-amethyst-sliver.png",
        2: "/ascension/jewels/vajrada-amethyst-fragment.png",
        3: "/ascension/jewels/vajrada-amethyst-chunk.png",
        4: "/ascension/jewels/vajrada-amethyst-gemstone.png",
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
  },
  Mona: {
    name: "Mona",
    rarity: 5,
    element: { name: "Hydro", image: "/elements/hydro.png" },
    gems: {
      name: "Varunada Lazurite",
      image: {
        1: "/ascension/jewels/varunada-lazurite-sliver.png",
        2: "/ascension/jewels/varunada-lazurite-fragment.png",
        3: "/ascension/jewels/varunada-lazurite-chunk.png",
        4: "/ascension/jewels/varunada-lazurite-gemstone.png",
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
  },
  Ningguang: {
    name: "Ningguang",
    rarity: 4,
    element: { name: "Geo", image: "/elements/geo.png" },
    gems: {
      name: "Prithiva Topaz",
      image: {
        1: "/ascension/jewels/prithiva-topaz-sliver.png",
        2: "/ascension/jewels/prithiva-topaz-fragment.png",
        3: "/ascension/jewels/prithiva-topaz-chunk.png",
        4: "/ascension/jewels/prithiva-topaz-gemstone.png",
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
  },
  Noelle: {
    name: "Noelle",
    rarity: 4,
    element: { name: "Geo", image: "/elements/geo.png" },
    gems: {
      name: "Prithiva Topaz",
      image: {
        1: "/ascension/jewels/prithiva-topaz-sliver.png",
        2: "/ascension/jewels/prithiva-topaz-fragment.png",
        3: "/ascension/jewels/prithiva-topaz-chunk.png",
        4: "/ascension/jewels/prithiva-topaz-gemstone.png",
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
  },
  Qiqi: {
    name: "Qiqi",
    rarity: 5,
    element: { name: "Cyro", image: "/elements/cryo.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        1: "/ascension/jewels/shivada-jade-sliver.png",
        2: "/ascension/jewels/shivada-jade-fragment.png",
        3: "/ascension/jewels/shivada-jade-chunk.png",
        4: "/ascension/jewels/shivada-jade-gemstone.png",
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
  },
  Raiden: {
    name: "Raiden",
    rarity: 5,
    element: { name: "Electro", image: "/elements/electro.png" },
    gems: {
      name: "Vajrada Amethyst",
      image: {
        1: "/ascension/jewels/vajrada-amethyst-sliver.png",
        2: "/ascension/jewels/vajrada-amethyst-fragment.png",
        3: "/ascension/jewels/vajrada-amethyst-chunk.png",
        4: "/ascension/jewels/vajrada-amethyst-gemstone.png",
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
  },
  Razor: {
    name: "Razor",
    rarity: 4,
    element: { name: "Electro", image: "/elements/electro.png" },
    gems: {
      name: "Vajrada Amethyst",
      image: {
        1: "/ascension/jewels/vajrada-amethyst-sliver.png",
        2: "/ascension/jewels/vajrada-amethyst-fragment.png",
        3: "/ascension/jewels/vajrada-amethyst-chunk.png",
        4: "/ascension/jewels/vajrada-amethyst-gemstone.png",
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
  },
  Rosaria: {
    name: "Rosaria",
    rarity: 4,
    element: { name: "Cyro", image: "/elements/cryo.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        1: "/ascension/jewels/shivada-jade-sliver.png",
        2: "/ascension/jewels/shivada-jade-fragment.png",
        3: "/ascension/jewels/shivada-jade-chunk.png",
        4: "/ascension/jewels/shivada-jade-gemstone.png",
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
  },
  Sara: {
    name: "Sara",
    rarity: 4,
    element: { name: "Electro", image: "/elements/electro.png" },
    gems: {
      name: "Vajrada Amethyst",
      image: {
        1: "/ascension/jewels/vajrada-amethyst-sliver.png",
        2: "/ascension/jewels/vajrada-amethyst-fragment.png",
        3: "/ascension/jewels/vajrada-amethyst-chunk.png",
        4: "/ascension/jewels/vajrada-amethyst-gemstone.png",
      },
    },
    weapon: { name: "Bow", image: "/weapons/bow.png" },
    image: "/characters_full/sara.png",
    icon: "/characters_icon/sara.png",
    bossMat: { name: "", image: "" },
    specialty: { name: "", image: "" },
  },
  Sayu: {
    name: "Sayu",
    rarity: 4,
    element: { name: "Anemo", image: "/elements/anemo.png" },
    gems: {
      name: "Vayuda Turquoise",
      image: {
        1: "/ascension/jewels/vayuda-turquoise-sliver.png",
        2: "/ascension/jewels/vayuda-turquoise-fragment.png",
        3: "/ascension/jewels/vayuda-turquoise-chunk.png",
        4: "/ascension/jewels/vayuda-turquoise-gemstone.png",
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
  },
  Sucrose: {
    name: "Sucrose",
    rarity: 4,
    element: { name: "Anemo", image: "/elements/anemo.png" },
    gems: {
      name: "Vayuda Turquoise",
      image: {
        1: "/ascension/jewels/vayuda-turquoise-sliver.png",
        2: "/ascension/jewels/vayuda-turquoise-fragment.png",
        3: "/ascension/jewels/vayuda-turquoise-chunk.png",
        4: "/ascension/jewels/vayuda-turquoise-gemstone.png",
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
  },
  Tartaglia: {
    name: "Tartaglia",
    rarity: 5,
    element: { name: "Hydro", image: "/elements/hydro.png" },
    gems: {
      name: "Varunada Lazurite",
      image: {
        1: "/ascension/jewels/varunada-lazurite-sliver.png",
        2: "/ascension/jewels/varunada-lazurite-fragment.png",
        3: "/ascension/jewels/varunada-lazurite-chunk.png",
        4: "/ascension/jewels/varunada-lazurite-gemstone.png",
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
  },
  Traveler: {
    name: "Traveler",
    rarity: 5,
    element: { name: "Adaptive", image: "/elements/adaptive.png" },
    gems: {
      name: "Brilliant Diamond",
      image: {
        1: "/ascension/jewels/brilliant-diamond-sliver.png",
        2: "/ascension/jewels/brilliant-diamond-fragment.png",
        3: "/ascension/jewels/brilliant-diamond-chunk.png",
        4: "/ascension/jewels/brilliant-diamond-gemstone.png",
      },
    },
    weapon: { name: "Sword", image: "/weapons/sword.png" },
    image: "/characters_full/traveler.png",
    icon: "/characters_icon/traveler.png",
    bossMat: { name: "", image: "" },
    specialty: { name: "", image: "" },
  },
  Venti: {
    name: "Venti",
    rarity: 5,
    element: { name: "Anemo", image: "/elements/anemo.png" },
    gems: {
      name: "Vayuda Turquoise",
      image: {
        1: "/ascension/jewels/vayuda-turquoise-sliver.png",
        2: "/ascension/jewels/vayuda-turquoise-fragment.png",
        3: "/ascension/jewels/vayuda-turquoise-chunk.png",
        4: "/ascension/jewels/vayuda-turquoise-gemstone.png",
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
  },
  Xiangling: {
    name: "Xiangling",
    rarity: 4,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        1: "/ascension/jewels/agnidus-agate-sliver.png",
        2: "/ascension/jewels/agnidus-agate-fragment.png",
        3: "/ascension/jewels/agnidus-agate-chunk.png",
        4: "/ascension/jewels/agnidus-agate-gemstone.png",
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
  },
  Xiao: {
    name: "Xiao",
    rarity: 5,
    element: { name: "Anemo", image: "/elements/anemo.png" },
    gems: {
      name: "Vayuda Turquoise",
      image: {
        1: "/ascension/jewels/vayuda-turquoise-sliver.png",
        2: "/ascension/jewels/vayuda-turquoise-fragment.png",
        3: "/ascension/jewels/vayuda-turquoise-chunk.png",
        4: "/ascension/jewels/vayuda-turquoise-gemstone.png",
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
  },
  Xingqiu: {
    name: "Xingqiu",
    rarity: 4,
    element: { name: "Hydro", image: "/elements/hydro.png" },
    gems: {
      name: "Varunada Lazurite",
      image: {
        1: "/ascension/jewels/varunada-lazurite-sliver.png",
        2: "/ascension/jewels/varunada-lazurite-fragment.png",
        3: "/ascension/jewels/varunada-lazurite-chunk.png",
        4: "/ascension/jewels/varunada-lazurite-gemstone.png",
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
  },
  Xinyan: {
    name: "Xinyan",
    rarity: 4,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        1: "/ascension/jewels/agnidus-agate-sliver.png",
        2: "/ascension/jewels/agnidus-agate-fragment.png",
        3: "/ascension/jewels/agnidus-agate-chunk.png",
        4: "/ascension/jewels/agnidus-agate-gemstone.png",
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
  },
  Yanfei: {
    name: "Yanfei",
    rarity: 4,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        1: "/ascension/jewels/agnidus-agate-sliver.png",
        2: "/ascension/jewels/agnidus-agate-fragment.png",
        3: "/ascension/jewels/agnidus-agate-chunk.png",
        4: "/ascension/jewels/agnidus-agate-gemstone.png",
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
  },
  Yoimiya: {
    name: "Yoimiya",
    rarity: 5,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    gems: {
      name: "Shivada Jade",
      image: {
        1: "/ascension/jewels/agnidus-agate-sliver.png",
        2: "/ascension/jewels/agnidus-agate-fragment.png",
        3: "/ascension/jewels/agnidus-agate-chunk.png",
        4: "/ascension/jewels/agnidus-agate-gemstone.png",
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
  },
  Zhongli: {
    name: "Zhongli",
    rarity: 5,
    element: { name: "Geo", image: "/elements/geo.png" },
    gems: {
      name: "Prithiva Topaz",
      image: {
        1: "/ascension/jewels/prithiva-topaz-sliver.png",
        2: "/ascension/jewels/prithiva-topaz-fragment.png",
        3: "/ascension/jewels/prithiva-topaz-chunk.png",
        4: "/ascension/jewels/prithiva-topaz-gemstone.png",
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
