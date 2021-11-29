import { ref } from "vue";

const ALL_CHARACTERS = {
  Albedo: {
    name: "Albedo",
    rarity: 5,
    element: { name: "Geo", image: "/elements/geo.png" },
    weapon: { name: "Sword", image: "/weapons/sword.png" },
    image: "/characters/albedo.png",
    icon: "/characters_icon/albedo.png",
    skillTalents: {
      "Normal Attack": {
        name: "Favonius Bladework - Weiss",
        image: "/talents/albedo_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Abiogenesis: Solar Isotoma",
        image: "/talents/albedo_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Rite of Progeniture: Tectonic Tide",
        image: "/talents/albedo_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Aloy: {
    name: "Aloy",
    rarity: 5,
    element: { name: "Cryo", image: "/elements/cryo.png" },
    weapon: { name: "Bow", image: "/weapons/bow.png" },
    image: "/characters/aloy.png",
    icon: "/characters_icon/aloy.png",
    skillTalents: {
      "Normal Attack": {
        name: "Rapid Fire",
        image: "/talents/aloy_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Frozen Wilds",
        image: "/talents/aloy_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Prophecies of Dawn",
        image: "/talents/aloy_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Amber: {
    name: "Amber",
    rarity: 4,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    weapon: { name: "Bow", image: "/weapons/bow.png" },
    image: "/characters/amber.png",
    icon: "/characters_icon/amber.png",
    skillTalents: {
      "Normal Attack": {
        name: "Sharpshooter",
        image: "/talents/amber_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Explosive Puppet",
        image: "/talents/amber_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Fiery Rain",
        image: "/talents/amber_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Ayaka: {
    name: "Ayaka",
    rarity: 5,
    element: { name: "Cryo", image: "/elements/cryo.png" },
    weapon: { name: "Sword", image: "/weapons/sword.png" },
    image: "/characters/ayaka.png",
    icon: "/characters_icon/ayaka.png",
    skillTalents: {
      "Normal Attack": {
        name: "Kamisato Art - Kabuki",
        image: "/talents/ayaka_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Kamisato Art: Hyouka",
        image: "/talents/ayaka_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Kamisato Art: Soumetsu",
        image: "/talents/ayaka_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Barbara: {
    name: "Barbara",
    rarity: 4,
    element: { name: "Hydro", image: "/elements/hydro.png" },
    weapon: { name: "Catalyst", image: "/weapons/catalyst.png" },
    image: "/characters/barbara.png",
    icon: "/characters_icon/barbara.png",
    skillTalents: {
      "Normal Attack": {
        name: "Whisper of Water",
        image: "/talents/barbara_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Let the Show Begin",
        image: "/talents/barbara_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Shining Miracle",
        image: "/talents/barbara_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Beidou: {
    name: "Beidou",
    rarity: 4,
    element: { name: "Electro", image: "/elements/electro.png" },
    weapon: { name: "Claymore", image: "/weapons/claymore.png" },
    image: "/characters/beidou.png",
    icon: "/characters_icon/beidou.png",
    skillTalents: {
      "Normal Attack": {
        name: "Oceanborne",
        image: "/talents/beidou_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Tidecaller",
        image: "/talents/beidou_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Stormbreaker",
        image: "/talents/beidou_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Bennett: {
    name: "Bennett",
    rarity: 4,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    weapon: { name: "Sword", image: "/weapons/sword.png" },
    image: "/characters/bennett.png",
    icon: "/characters_icon/bennett.png",
    skillTalents: {
      "Normal Attack": {
        name: "Strike of Fortune",
        image: "/talents/bennett_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Passion Overload",
        image: "/talents/bennett_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Fantastic Voyage",
        image: "/talents/bennett_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Chongyun: {
    name: "Chongyun",
    rarity: 4,
    element: { name: "Cryo", image: "/elements/cryo.png" },
    weapon: { name: "Claymore", image: "/weapons/claymore.png" },
    image: "/characters/chongyun.png",
    icon: "/characters_icon/chongyun.png",
    skillTalents: {
      "Normal Attack": {
        name: "Demonbane",
        image: "/talents/chongyun_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Spirit Blade - Chonghua's Layered Frost",
        image: "/talents/chongyun_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Spirit Blade - Cloud-parting Star",
        image: "/talents/chongyun_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Diluc: {
    name: "Diluc",
    rarity: 5,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    weapon: { name: "Claymore", image: "/weapons/claymore.png" },
    image: "/characters/diluc.png",
    icon: "/characters_icon/diluc.png",
    skillTalents: {
      "Normal Attack": {
        name: "Tempered Sword",
        image: "/talents/diluc_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Searing Onslaught",
        image: "/talents/diluc_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Dawn",
        image: "/talents/diluc_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Diona: {
    name: "Diona",
    rarity: 4,
    element: { name: "Cryo", image: "/elements/cryo.png" },
    weapon: { name: "Bow", image: "/weapons/bow.png" },
    image: "/characters/diona.png",
    icon: "/characters_icon/diona.png",
    skillTalents: {
      "Normal Attack": {
        name: "Katzlein Style",
        image: "/talents/diona_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Icy Paws",
        image: "/talents/diona_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Signature Mix",
        image: "/talents/diona_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Eula: {
    name: "Eula",
    rarity: 5,
    element: { name: "Cryo", image: "/elements/cryo.png" },
    weapon: { name: "Claymore", image: "/weapons/claymore.png" },
    image: "/characters/eula.png",
    icon: "/characters_icon/eula.png",
    skillTalents: {
      "Normal Attack": {
        name: "Favonius Bladework - Edel",
        image: "/talents/eula_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Icetide Vortex",
        image: "/talents/eula_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Glacial Illumination",
        image: "/talents/eula_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Fischl: {
    name: "Fischl",
    rarity: 4,
    element: { name: "Electro", image: "/elements/electro.png" },
    weapon: { name: "Bow", image: "/weapons/bow.png" },
    image: "/characters/fischl.png",
    icon: "/characters_icon/fischl.png",
    skillTalents: {
      "Normal Attack": {
        name: "Bolts of Downfall",
        image: "/talents/fischl_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Nightrider",
        image: "/talents/fischl_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Midnight Phantasmagoria",
        image: "/talents/fischl_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Ganyu: {
    name: "Ganyu",
    rarity: 5,
    element: { name: "Cryo", image: "/elements/cryo.png" },
    weapon: { name: "Bow", image: "/weapons/bow.png" },
    image: "/characters/ganyu.png",
    icon: "/characters_icon/ganyu.png",
    skillTalents: {
      "Normal Attack": {
        name: "Liutian Archery",
        image: "/talents/ganyu_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Trail of the Qilin",
        image: "/talents/ganyu_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Celestial Shower",
        image: "/talents/ganyu_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  "Hu Tao": {
    name: "Hu Tao",
    rarity: 5,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    weapon: { name: "Polearm", image: "/weapons/polearm.png" },
    image: "/characters/hu-tao.png",
    icon: "/characters_icon/hu-tao.png",
    skillTalents: {
      "Normal Attack": {
        name: "Secret Spear of Wangsheng",
        image: "/talents/hu-tao_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Guide to Afterlife",
        image: "/talents/hu-tao_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Spirit Soother",
        image: "/talents/hu-tao_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Jean: {
    name: "Jean",
    rarity: 5,
    element: { name: "Anemo", image: "/elements/anemo.png" },
    weapon: { name: "Sword", image: "/weapons/sword.png" },
    image: "/characters/jean.png",
    icon: "/characters_icon/jean.png",
    skillTalents: {
      "Normal Attack": {
        name: "Favonius Bladework",
        image: "/talents/jean_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Gale Blade",
        image: "/talents/jean_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Dandelion Breeze",
        image: "/talents/jean_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Kaeya: {
    name: "Kaeya",
    rarity: 4,
    element: { name: "Cryo", image: "/elements/cryo.png" },
    weapon: { name: "Sword", image: "/weapons/sword.png" },
    image: "/characters/kaeya.png",
    icon: "/characters_icon/kaeya.png",
    skillTalents: {
      "Normal Attack": {
        name: "Ceremonial Bladework",
        image: "/talents/kaeya_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Frostgnaw",
        image: "/talents/kaeya_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Glacial Waltz",
        image: "/talents/kaeya_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Kazuha: {
    name: "Kazuha",
    rarity: 5,
    element: { name: "Anemo", image: "/elements/anemo.png" },
    weapon: { name: "Sword", image: "/weapons/sword.png" },
    image: "/characters/kazuha.png",
    icon: "/characters_icon/kazuha.png",
    skillTalents: {
      "Normal Attack": {
        name: "Garyuu Bladework",
        image: "/talents/kazuha_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Chihayaburu",
        image: "/talents/kazuha_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Kazuha Slash",
        image: "/talents/kazuha_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Keqing: {
    name: "Keqing",
    rarity: 5,
    element: { name: "Electro", image: "/elements/electro.png" },
    weapon: { name: "Sword", image: "/weapons/sword.png" },
    image: "/characters/keqing.png",
    icon: "/characters_icon/keqing.png",
    skillTalents: {
      "Normal Attack": {
        name: "Yunlai Swordsmanship",
        image: "/talents/keqing_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Stellar Restoration",
        image: "/talents/keqing_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Starward Sword",
        image: "/talents/keqing_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Klee: {
    name: "Klee",
    rarity: 5,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    weapon: { name: "Catalyst", image: "/weapons/catalyst.png" },
    image: "/characters/klee.png",
    icon: "/characters_icon/klee.png",
    skillTalents: {
      "Normal Attack": {
        name: "Kaboom!",
        image: "/talents/klee_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Jumpy Dumpty",
        image: "/talents/klee_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Sparks 'n' Splash",
        image: "/talents/klee_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Kokomi: {
    name: "Kokomi",
    rarity: 5,
    element: { name: "Hydro", image: "/elements/hydro.png" },
    weapon: { name: "Catalyst", image: "/weapons/catalyst.png" },
    image: "/characters/kokomi.png",
    icon: "/characters_icon/kokomi.png",
    skillTalents: {
      "Normal Attack": {
        name: "The Shape of Water",
        image: "/talents/kokomi_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Kurage's Oath",
        image: "/talents/kokomi_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Nereid's Ascension",
        image: "/talents/kokomi_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Lisa: {
    name: "Lisa",
    rarity: 4,
    element: { name: "Electro", image: "/elements/electro.png" },
    weapon: { name: "Catalyst", image: "/weapons/catalyst.png" },
    image: "/characters/lisa.png",
    icon: "/characters_icon/lisa.png",
    skillTalents: {
      "Normal Attack": {
        name: "Lightning Touch",
        image: "/talents/lisa_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Violet Arc",
        image: "/talents/lisa_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Lightning Rose",
        image: "/talents/lisa_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Mona: {
    name: "Mona",
    rarity: 5,
    element: { name: "Hydro", image: "/elements/hydro.png" },
    weapon: { name: "Catalyst", image: "/weapons/catalyst.png" },
    image: "/characters/mona.png",
    icon: "/characters_icon/mona.png",
    skillTalents: {
      "Normal Attack": {
        name: "Ripple of Fate",
        image: "/talents/mona_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Reflection of Doom",
        image: "/talents/mona_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Stellaris Phantasm",
        image: "/talents/mona_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Ningguang: {
    name: "Ningguang",
    rarity: 4,
    element: { name: "Geo", image: "/elements/geo.png" },
    weapon: { name: "Catalyst", image: "/weapons/catalyst.png" },
    image: "/characters/ningguang.png",
    icon: "/characters_icon/ningguang.png",
    skillTalents: {
      "Normal Attack": {
        name: "Sparkling Scatter",
        image: "/talents/ningguang_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Jade Screen",
        image: "/talents/ningguang_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Starshatter",
        image: "/talents/ningguang_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Noelle: {
    name: "Noelle",
    rarity: 4,
    element: { name: "Geo", image: "/elements/geo.png" },
    weapon: { name: "Claymore", image: "/weapons/claymore.png" },
    image: "/characters/noelle.png",
    icon: "/characters_icon/noelle.png",
    skillTalents: {
      "Normal Attack": {
        name: "Favonius Bladework - Maid",
        image: "/talents/noelle_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Breastplate",
        image: "/talents/noelle_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Sweeping Time",
        image: "/talents/noelle_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Qiqi: {
    name: "Qiqi",
    rarity: 5,
    element: { name: "Cryo", image: "/elements/cryo.png" },
    weapon: { name: "Sword", image: "/weapons/sword.png" },
    image: "/characters/qiqi.png",
    icon: "/characters_icon/qiqi.png",
    skillTalents: {
      "Normal Attack": {
        name: "Ancient Sword Art",
        image: "/talents/qiqi_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Adeptus Art: Herald of Frost",
        image: "/talents/qiqi_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Adeptus Art: Preserver of Fortune",
        image: "/talents/qiqi_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Raiden: {
    name: "Raiden",
    rarity: 5,
    element: { name: "Electro", image: "/elements/electro.png" },
    weapon: { name: "Polearm", image: "/weapons/polearm.png" },
    image: "/characters/raiden.png",
    icon: "/characters_icon/raiden.png",
    skillTalents: {
      "Normal Attack": {
        name: "Origin",
        image: "/talents/raiden_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Transcendence: Baleful Omen",
        image: "/talents/raiden_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Secret Art: Musou Shinsetsu",
        image: "/talents/raiden_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Razor: {
    name: "Razor",
    rarity: 4,
    element: { name: "Electro", image: "/elements/electro.png" },
    weapon: { name: "Claymore", image: "/weapons/claymore.png" },
    image: "/characters/razor.png",
    icon: "/characters_icon/razor.png",
    skillTalents: {
      "Normal Attack": {
        name: "Steel Fang",
        image: "/talents/razor_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Claw and Thunder",
        image: "/talents/razor_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Lightning Fang",
        image: "/talents/razor_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Rosaria: {
    name: "Rosaria",
    rarity: 4,
    element: { name: "Cryo", image: "/elements/cryo.png" },
    weapon: { name: "Polearm", image: "/weapons/polearm.png" },
    image: "/characters/rosaria.png",
    icon: "/characters_icon/rosaria.png",
    skillTalents: {
      "Normal Attack": {
        name: "Spear of the Church",
        image: "/talents/rosaria_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Ravaging Confession",
        image: "/talents/rosaria_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Rites of Termination",
        image: "/talents/rosaria_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Sara: {
    name: "Sara",
    rarity: 4,
    element: { name: "Electro", image: "/elements/electro.png" },
    weapon: { name: "Bow", image: "/weapons/bow.png" },
    image: "/characters/sara.png",
    icon: "/characters_icon/sara.png",
    skillTalents: {
      "Normal Attack": {
        name: "Tengu Bowmanship",
        image: "/talents/sara_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Tengu Stormcall",
        image: "/talents/sara_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Subjugation: Koukou Sendou",
        image: "/talents/sara_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Sayu: {
    name: "Sayu",
    rarity: 4,
    element: { name: "Anemo", image: "/elements/anemo.png" },
    weapon: { name: "Claymore", image: "/weapons/claymore.png" },
    image: "/characters/sayu.png",
    icon: "/characters_icon/sayu.png",
    skillTalents: {
      "Normal Attack": {
        name: "Shuumatsuban Ninja Blade",
        image: "/talents/sayu_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Yoohoo Art: Fuuin Dash",
        image: "/talents/sayu_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Yoohoo Art: Mujina Flurry",
        image: "/talents/sayu_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Sucrose: {
    name: "Sucrose",
    rarity: 4,
    element: { name: "Anemo", image: "/elements/anemo.png" },
    weapon: { name: "Catalyst", image: "/weapons/catalyst.png" },
    image: "/characters/sucrose.png",
    icon: "/characters_icon/sucrose.png",
    skillTalents: {
      "Normal Attack": {
        name: "Wind Spirit Creation",
        image: "/talents/sucrose_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Astable Anemohypostasis Creation - 6308",
        image: "/talents/sucrose_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Forbidden Creation - Isomer 75 / Type II",
        image: "/talents/sucrose_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Tartaglia: {
    name: "Tartaglia",
    rarity: 5,
    element: { name: "Hydro", image: "/elements/hydro.png" },
    weapon: { name: "Bow", image: "/weapons/bow.png" },
    image: "/characters/tartaglia.png",
    icon: "/characters_icon/tartaglia.png",
    skillTalents: {
      "Normal Attack": {
        name: "Cutting Torrent",
        image: "/talents/tartaglia_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Foul Legacy: Raging Tide",
        image: "/talents/tartaglia_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Havor: Obliteration",
        image: "/talents/tartaglia_s3.png",
        unlock: "Elemental Burst",
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
    skillTalents: {
      "Normal Attack": {
        name: "Divine Marksmanship",
        image: "/talents/venti_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Skyward Sonnet",
        image: "/talents/venti_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Wind's Grand Ode",
        image: "/talents/venti_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Xiangling: {
    name: "Xiangling",
    rarity: 4,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    weapon: { name: "Polearm", image: "/weapons/polearm.png" },
    image: "/characters/xiangling.png",
    icon: "/characters_icon/xiangling.png",
    skillTalents: {
      "Normal Attack": {
        name: "Dough-Fu",
        image: "/talents/xiangling_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Guoba Attack",
        image: "/talents/xiangling_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Pyronado",
        image: "/talents/xiangling_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Xiao: {
    name: "Xiao",
    rarity: 5,
    element: { name: "Anemo", image: "/elements/anemo.png" },
    weapon: { name: "Polearm", image: "/weapons/polearm.png" },
    image: "/characters/xiao.png",
    icon: "/characters_icon/xiao.png",
    skillTalents: {
      "Normal Attack": {
        name: "Whirlwind Thrust",
        image: "/talents/xiao_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Lemniscatic Wind Cycling",
        image: "/talents/xiao_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Bane of All Evil",
        image: "/talents/xiao_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Xingqiu: {
    name: "Xingqiu",
    rarity: 4,
    element: { name: "Hydro", image: "/elements/hydro.png" },
    weapon: { name: "Sword", image: "/weapons/sword.png" },
    image: "/characters/xingqiu.png",
    icon: "/characters_icon/xingqiu.png",
    skillTalents: {
      "Normal Attack": {
        name: "Guhua Style",
        image: "/talents/xingqiu_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Guhua Sword - Fatal Rainscreen",
        image: "/talents/xingqiu_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Guhua Sword - Raincutter",
        image: "/talents/xingqiu_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Xinyan: {
    name: "Xinyan",
    rarity: 4,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    weapon: { name: "Claymore", image: "/weapons/claymore.png" },
    image: "/characters/xinyan.png",
    icon: "/characters_icon/xinyan.png",
    skillTalents: {
      "Normal Attack": {
        name: "Dance on Fire",
        image: "/talents/xinyan_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Sweeping Fervor",
        image: "/talents/xinyan_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Riff Revolution",
        image: "/talents/xinyan_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Yanfei: {
    name: "Yanfei",
    rarity: 4,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    weapon: { name: "Catalyst", image: "/weapons/catalyst.png" },
    image: "/characters/yanfei.png",
    icon: "/characters_icon/yanfei.png",
    skillTalents: {
      "Normal Attack": {
        name: "Seal of Approval",
        image: "/talents/yanfei_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Jade Screen",
        image: "/talents/yanfei_s2.png",
        unlock: "Signed Edict",
      },
      "Elemental Burst": {
        name: "Done Deal",
        image: "/talents/yanfei_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Yoimiya: {
    name: "Yoimiya",
    rarity: 5,
    element: { name: "Pyro", image: "/elements/pyro.png" },
    weapon: { name: "Bow", image: "/weapons/bow.png" },
    image: "/characters/yoimiya.png",
    icon: "/characters_icon/yoimiya.png",
    skillTalents: {
      "Normal Attack": {
        name: "Firework Flare-Up",
        image: "/talents/yoimiya_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Niwabi Fire-Dance",
        image: "/talents/yoimiya_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Ryuukin Saxifrage",
        image: "/talents/yoimiya_s3.png",
        unlock: "Elemental Burst",
      },
    },
  },
  Zhongli: {
    name: "Zhongli",
    rarity: 5,
    element: { name: "Geo", image: "/elements/geo.png" },
    weapon: { name: "Polearm", image: "/weapons/polearm.png" },
    image: "/characters/zhongli.png",
    icon: "/characters_icon/zhongli.png",
    skillTalents: {
      "Normal Attack": {
        name: "Rain of Stone",
        image: "/talents/zhongli_s1.png",
        unlock: "Normal Attack",
      },
      "Elemental Skill": {
        name: "Dominus Lapidis",
        image: "/talents/zhongli_s2.png",
        unlock: "Elemental Skill",
      },
      "Elemental Burst": {
        name: "Planet Befall",
        image: "/talents/zhongli_s3.png",
        unlock: "Elemental Burst",
      },
    },
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
