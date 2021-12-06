<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useLocal } from "../composable/useLocal";

const route = useRoute();
const { name } = route.params;

const {
  getCharacter,
  getBooks,
  getJewels,
  getBoss,
  getSpecialty,
  getWeekly,
  getMob,
} = useLocal();

const thisCharacter = getCharacter(name);
const thisBook = getBooks(name);
const thisJewel = getJewels(name);
const thisBoss = getBoss(name);
const thisSpecialty = getSpecialty(name);
const thisWeekly = getWeekly(name);
const thisMob = getMob(name);

const cTal = ref([1, 1, 1]);
const dTal = ref([1, 1, 1]);
const cMaxTal = ref(1);
const dMaxTal = ref(1);

const level = ref([1, 1]);
const bCount = ref([0, 0, 0]); //Book
const jCount = ref([0, 0, 0, 0]); //Jewel
const bmCount = ref(0); //Boss Material
const sCount = ref(0); //Specialty
const mCount = ref([0, 0, 0]); //Mob
const wCount = ref(0); //weekly boss material
const crowns = ref(0);
const mora = ref("0");
const xp = ref("0");
const ascLevel = ref([0, 0]);

const getMaxTalent = (ascensionLevel) => {
  let myTalent = 1;
  if (ascensionLevel >= 2) {
    myTalent++;
  }
  for (let counter = 2; counter < ascensionLevel; counter++) {
    myTalent += 2;
  }
  return myTalent;
};

const getAscension = (oldLevel, newLevel) => {
  //Lvl Decreased
  if (oldLevel - newLevel > 0) {
    if (newLevel < 20) {
      return 0;
    } else if (newLevel < 40) {
      return 1;
    } else if (newLevel < 50) {
      return 2;
    } else if (newLevel < 60) {
      return 3;
    } else if (newLevel < 70) {
      return 4;
    } else if (newLevel < 80) {
      return 5;
    } else {
      return 6;
    }
  }
  //Lvl Increased
  else {
    if (newLevel > 80) {
      return 6;
    } else if (newLevel > 70) {
      return 5;
    } else if (newLevel > 60) {
      return 4;
    } else if (newLevel > 50) {
      return 3;
    } else if (newLevel > 40) {
      return 2;
    } else if (newLevel > 20) {
      return 1;
    } else {
      return 0;
    }
  }
};

const setNewLevel = (asc, cLevel) => {
  if ((asc == 6 && cLevel < 80) || (asc == 5 && cLevel > 80)) {
    return 80;
  } else if ((asc == 5 && cLevel < 70) || (asc == 4 && cLevel > 70)) {
    return 70;
  } else if ((asc == 4 && cLevel < 60) || (asc == 3 && cLevel > 60)) {
    return 60;
  } else if ((asc == 3 && cLevel < 50) || (asc == 2 && cLevel > 50)) {
    return 50;
  } else if ((asc == 2 && cLevel < 40) || (asc == 1 && cLevel > 40)) {
    return 40;
  } else if ((asc == 1 && cLevel < 20) || (asc == 0 && cLevel > 20)) {
    return 20;
  } else {
    return cLevel;
  }
};

//CHARTS FOR USE WITH METHODS
const chartXP = [
  0, 1000, 1325, 1700, 2150, 2625, 3150, 3725, 4350, 5000, 5700, 6450, 7225,
  8050, 8925, 9825, 10750, 11725, 12725, 13775, 14875, 16800, 18000, 19250,
  20550, 21875, 23250, 24650, 26100, 27575, 29100, 30650, 32250, 33875, 35550,
  37250, 38975, 40750, 42575, 44425, 46300, 50625, 52700, 54775, 56900, 59075,
  61275, 63525, 65800, 68125, 70475, 76500, 79050, 81650, 84275, 86950, 89650,
  92400, 95175, 98000, 100875, 108950, 112050, 115175, 118325, 121525, 124775,
  128075, 131400, 134775, 138175, 148700, 152375, 156075, 159825, 163600,
  167425, 171300, 175225, 179175, 183175, 216225, 243025, 273100, 306800,
  344600, 386950, 434425, 487625, 547200,
];
//chartJewels [qty, type(index)]
const chartJewel = [
  [1, 0],
  [3, 1],
  [6, 1],
  [3, 2],
  [6, 2],
  [6, 3],
];
//chartBook [qty, type(index)], starts at Lvl 2 Tal upgrade
const chartBook = [
  [3, 0],
  [2, 1],
  [4, 1],
  [6, 1],
  [9, 1],
  [4, 2],
  [6, 2],
  [12, 2],
  [16, 2],
];
//chartAscMob [qty, type(index)]
const chartAscMob = [
  [3, 0],
  [15, 0],
  [12, 1],
  [18, 1],
  [12, 2],
  [24, 2],
];
//chartTalMob [qty, type(index)]
const chartTalMob = [
  [6, 0],
  [3, 1],
  [4, 1],
  [6, 1],
  [9, 1],
  [4, 2],
  [6, 2],
  [9, 2],
  [12, 2],
];
const chartBoss = [0, 2, 4, 8, 12, 20];
const chartSpecialty = [3, 10, 20, 30, 45, 60];
const chartTalMora = [
  0, 12500, 17500, 25000, 30000, 37500, 120000, 260000, 450000, 700000,
];
const jbmsGet = (cAsc, dAsc) => {
  let j = [0, 0, 0, 0];
  let bm = 0;
  let s = 0;

  if (cAsc < dAsc) {
    for (; cAsc < dAsc; cAsc++) {
      j[chartJewel[cAsc][1]] += chartJewel[cAsc][0];
      bm += chartBoss[cAsc];
      s += chartSpecialty[cAsc];
    }
  }
  return [j, bm, s];
};
const mobMoraXPGet = (lvl, asc, cT, dT) => {
  let thisXP = 0;
  let thisMora = 0;
  let thisMob = [0, 0, 0];

  console.log(`lvl = ${lvl}\nasc=${asc}\ncT=${cT}\ndT=${dT}\n`);
  //Level Up Cost
  for (; lvl[0] < lvl[1]; lvl[0]++) {
    thisXP += chartXP[lvl[0]];
  }
  thisMora += thisXP / 5;
  //Ascension Cost
  for (; asc[0] < asc[1]; asc[0]++) {
    thisMora += 20000 * (asc[0] + 1);
    thisMob[chartAscMob[asc[0]][1]] += chartAscMob[asc[0]][0];
  }
  //Talent Cost
  for (let i = 0; i < 3; i++) {
    for (; cT[i] < dT[i]; cT[i]++) {
      thisMob[chartTalMob[cT[i] - 1][1]] += chartTalMob[cT[i] - 1][0];
      thisMora += chartTalMora[cT[i]];
    }
  }
  return [
    thisMob,
    thisMora.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    thisXP.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  ];
};
const weeklyBookGet = (c, d) => {
  let w = 0;
  let b = [0, 0, 0];
  let crn = 0;

  //For each of the 3 talents
  for (let i = 0; i < 3; i++) {
    //For each Talent Level
    for (; c[i] < d[i]; c[i]++) {
      b[chartBook[c[i] - 1][1]] += chartBook[c[i] - 1][0];
      if (c[i] > 5) {
        w++;
      }
      if (c[i] > 7) {
        w++;
      }
      if (c[i] == 9) {
        crn++;
      }
    }
  }
  return [w, b, crn];
};
</script>

<template>
  <!-- Top Area -->
  <div class="bg-black rounded-lg">
    <div class="container flex mt-10 border-2 border-black rounded-lg">
      <!-- Character Portrait -->
      <div class="w-1/3 border-black border-r-2">
        <img
          :src="thisCharacter.image"
          class="bg-gray-600 rounded-tl-md text-xl w-full h-auto"
        />
        <p class="text-center bg-white p-2 rounded-bl-md h-auto">
          <span
            v-for="n in thisCharacter.rarity"
            :key="n"
            class="text-yellow-500 tracking-tighter w-full p-1 text-xl"
            >★</span
          ><br />{{ thisCharacter.name }}
        </p>
      </div>
      <!-- Interactive Area -->
      <div
        @click="
          ([jCount, bmCount, sCount] = jbmsGet(ascLevel[0], ascLevel[1])),
            ([wCount, bCount, crowns] = weeklyBookGet([...cTal], [...dTal])),
            ([mCount, mora, xp] = mobMoraXPGet(
              [...level],
              [...ascLevel],
              [...cTal],
              [...dTal]
            ))
        "
        class="rounded-r-lg grid grid-rows-5 w-2/3 text-white"
      >
        <!-- Current Talents -->
        <div
          class="
            bg-gray-700
            text-center
            rounded-tr-md
            row-span-2
            lg:pt-3
            hover:scale-105
          "
        >
          <p class="underline pt-3">Talents (Current)</p>
          <div class="container flex space-x-3 px-3 py-2">
            <div
              v-for="(cTalents, name, index) in thisCharacter.skillTalents"
              :key="cTalents"
              class="
                self-end
                bg-gray-600
                rounded-md
                text-center
                w-1/3
                h-3/4
                border-2 border-black
              "
            >
              <div class="p-2 break-words text-sm border-black border-b-2">
                {{ cTalents.name }}<br />
                <div class="bg-gray-900 rounded-full">
                  <span>{{ cTalents.unlock }}</span>
                </div>
                <img
                  class="
                    rounded-2xl
                    w-20
                    h-20
                    my-1
                    inline-block
                    text-center
                    border-2 border-black
                    bg-opacity-80
                    p-1
                  "
                  :class="
                    thisCharacter.element.name == 'Anemo'
                      ? 'bg-green-400'
                      : thisCharacter.element.name === 'Pyro'
                      ? 'bg-red-600  bg-opacity-100'
                      : thisCharacter.element.name === 'Hydro'
                      ? 'bg-blue-500'
                      : thisCharacter.element.name === 'Cryo'
                      ? 'bg-blue-300'
                      : thisCharacter.element.name === 'Dendro'
                      ? 'bg-green-700'
                      : thisCharacter.element.name === 'Geo'
                      ? 'bg-yellow-400'
                      : thisCharacter.element.name === 'Electro'
                      ? 'bg-purple-500'
                      : 'bg-black'
                  "
                  :src="cTalents.image"
                />
              </div>
              <div
                class="
                  text-center
                  h-1/4
                  rounded-b-md
                  container
                  mx-auto
                  flex
                  justify-evenly
                "
              >
                <!-- CURRENT TALENTS BUTTON-->
                <button
                  @click="cTal[index] <= 1 ? (cTal[index] = 1) : cTal[index]--"
                  class="
                    w-1/3
                    transition
                    duration-300
                    ease-in-out
                    bg-red-500
                    hover:bg-red-600 hover:text-black hover:scale-105
                    rounded-bl-md
                  "
                >
                  -
                </button>
                <p class="w-1/3 bg-gray-900 text">{{ cTal[index] }}</p>
                <button
                  @click="
                    cTal[index] + 1 > cMaxTal
                      ? (cTal = cTal)
                      : cTal[index] >= dTal[index]
                      ? (cTal[index]++, dTal[index]++)
                      : cTal[index]++
                  "
                  class="
                    w-1/3
                    rounded-br-md
                    transition
                    duration-300
                    ease-in-out
                    bg-green-500
                    hover:bg-green-600 hover:text-black hover:scale-105
                  "
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- Desired Talents -->
        <div class="bg-gray-800 text-center row-span-2 lg:pt-3 hover:scale-105">
          <p class="underline pt-3">Talents (Desired)</p>
          <div class="container flex space-x-3 px-3 py-2">
            <div
              v-for="(cTalents, name, index) in thisCharacter.skillTalents"
              :key="cTalents"
              class="
                self-end
                bg-gray-600
                rounded-md
                text-center
                w-1/3
                border-2 border-black
              "
            >
              <div class="p-2 break-words text-sm border-black border-b-2">
                {{ cTalents.name }} <br />
                <div class="bg-gray-900 rounded-full">
                  <span>{{ cTalents.unlock }}</span>
                </div>
                <img
                  class="
                    rounded-2xl
                    w-20
                    h-20
                    my-1
                    inline-block
                    text-center
                    border-2 border-black
                    bg-opacity-80
                    p-1
                  "
                  :class="
                    thisCharacter.element.name == 'Anemo'
                      ? 'bg-green-400'
                      : thisCharacter.element.name === 'Pyro'
                      ? 'bg-red-600 bg-opacity-100'
                      : thisCharacter.element.name === 'Hydro'
                      ? 'bg-blue-500'
                      : thisCharacter.element.name === 'Cryo'
                      ? 'bg-blue-300'
                      : thisCharacter.element.name === 'Dendro'
                      ? 'bg-green-700'
                      : thisCharacter.element.name === 'Geo'
                      ? 'bg-yellow-400'
                      : thisCharacter.element.name === 'Electro'
                      ? 'bg-purple-500'
                      : 'bg-black'
                  "
                  :src="cTalents.image"
                />
              </div>
              <div
                class="
                  text-center
                  bg-white
                  h-1/4
                  rounded-b-md
                  container
                  mx-auto
                  flex
                  justify-evenly
                "
              >
                <!-- DESIRED TALENTS BUTTON-->
                <button
                  @click="
                    dTal[index] <= 1
                      ? ((cTal[index] = 1), (dTal[index] = 1))
                      : cTal[index] >= dTal[index]
                      ? (cTal[index]--, dTal[index]--)
                      : dTal[index]--
                  "
                  class="
                    w-1/3
                    transition
                    duration-300
                    ease-in-out
                    bg-red-500
                    hover:bg-red-600 hover:text-black hover:scale-105
                    rounded-bl-md
                  "
                >
                  -
                </button>
                <p class="w-1/3 bg-gray-900 text">{{ dTal[index] }}</p>
                <button
                  @click="dTal[index] + 1 > dMaxTal ? '' : dTal[index]++"
                  class="
                    w-1/3
                    rounded-br-md
                    transition
                    duration-300
                    ease-in-out
                    bg-green-500
                    hover:bg-green-600 hover:text-black hover:scale-105
                  "
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- Level/Ascension-->
        <div
          class="
            bg-gray-700
            px-5
            rounded-br-md
            row-span-1
            hover:scale-105 hover:shadow-lg
          "
        >
          <!-- Level -->
          <p class="text-center underline pt-2">Character Level</p>
          <div class="self-center p-2 grid grid-cols-2 gap-5">
            <!-- Current Level -->
            <div
              class="bg-gray-500 rounded-md text-center border-2 border-black"
            >
              <p class="py-1 border-black border-b-2">Current Level</p>
              <span class="text-lg" v-for="num in 6" :key="num">
                <button
                  @click="
                    (ascLevel[0] = num),
                      (level[0] = setNewLevel(ascLevel[0], level[0])),
                      level[0] > level[1] || ascLevel[0] > ascLevel[1]
                        ? ((level[1] = level[0]),
                          (ascLevel[1] = ascLevel[0]),
                          (cMaxTal = getMaxTalent(ascLevel[0])),
                          (dMaxTal = cMaxTal))
                        : (cMaxTal = getMaxTalent(ascLevel[0])),
                      dTal[0] > dMaxTal ? (dTal[0] = dMaxTal) : '',
                      cTal[0] > dTal[0] ? (cTal[0] = dTal[0]) : '',
                      dTal[1] > dMaxTal ? (dTal[1] = dMaxTal) : '',
                      cTal[1] > dTal[1] ? (cTal[1] = dTal[1]) : '',
                      dTal[2] > dMaxTal ? (dTal[2] = dMaxTal) : '',
                      cTal[2] > dTal[2] ? (cTal[2] = dTal[2]) : ''
                  "
                  class="
                    px-1
                    mx-px
                    rounded-full
                    text-black
                    font-bold
                    bg-blue-100 bg-opacity-30
                  "
                  v-if="num > ascLevel[0]"
                >
                  ✧
                </button>
                <button
                  @click="
                    ascLevel[0] == num ? ascLevel[0]-- : (ascLevel[0] = num),
                      (level[0] = setNewLevel(ascLevel[0], level[0])),
                      (cMaxTal = getMaxTalent(ascLevel[0])),
                      cTal[0] > cMaxTal ? (cTal[0] = cMaxTal) : '',
                      cTal[1] > cMaxTal ? (cTal[1] = cMaxTal) : '',
                      cTal[2] > cMaxTal ? (cTal[2] = cMaxTal) : ''
                  "
                  class="px-1 mx-px rounded-full bg-blue-100 bg-opacity-20"
                  v-else
                >
                  ✦
                </button>
              </span>
              <div
                class="
                  text-center
                  rounded-b-md
                  container
                  mx-auto
                  flex
                  justify-eve
                "
              >
                <button
                  @click="
                    (ascLevel[0] = getAscension(level[0], level[0] - 10)),
                      level[0],
                      level[0] <= 10 ? (level[0] = 1) : (level[0] -= 10),
                      (cMaxTal = getMaxTalent(ascLevel[0])),
                      cTal[0] > cMaxTal ? (cTal[0] = cMaxTal) : '',
                      cTal[1] > cMaxTal ? (cTal[1] = cMaxTal) : '',
                      cTal[2] > cMaxTal ? (cTal[2] = cMaxTal) : ''
                  "
                  class="
                    w-1/3
                    transition
                    duration-300
                    ease-in-out
                    bg-red-500
                    hover:bg-red-600 hover:text-black
                    rounded-bl-md
                    hover:scale-105
                  "
                >
                  -10
                </button>
                <button
                  @click="
                    (ascLevel[0] = getAscension(level[0], level[0] - 1)),
                      level[0] <= 1 ? (level[0] = 1) : level[0]--,
                      (cMaxTal = getMaxTalent(ascLevel[0])),
                      cTal[0] > cMaxTal ? (cTal[0] = cMaxTal) : '',
                      cTal[1] > cMaxTal ? (cTal[1] = cMaxTal) : '',
                      cTal[2] > cMaxTal ? (cTal[2] = cMaxTal) : ''
                  "
                  class="
                    w-1/3
                    transition
                    duration-300
                    ease-in-out
                    bg-red-400
                    hover:bg-red-600 hover:text-black hover:scale-105
                  "
                >
                  -1
                </button>
                <p class="w-1/3 bg-gray-900">{{ level[0] }}</p>
                <button
                  @click="
                    (ascLevel[0] = getAscension(level[0], level[0] + 1)),
                      level[0] >= 90
                        ? (level[0] = 90)
                        : level[0] + 1 >= level[1]
                        ? (level[0]++,
                          (level[1] = level[0]),
                          (cMaxTal = getMaxTalent(ascLevel[0])),
                          (dMaxTal = cMaxTal),
                          (ascLevel[1] = ascLevel[0]))
                        : level[0]++,
                      (cMaxTal = getMaxTalent(ascLevel[0]))
                  "
                  class="
                    w-1/3
                    transition
                    duration-300
                    ease-in-out
                    bg-green-400
                    hover:bg-green-600 hover:text-black hover:scale-105
                  "
                >
                  +1
                </button>
                <button
                  @click="
                    (ascLevel[0] = getAscension(level[0], level[0] + 10)),
                      level[0] >= 80
                        ? ((level[0] = 90),
                          (level[1] = 90),
                          (ascLevel[1] = ascLevel[0]),
                          (dMaxTal = 10))
                        : level[0] + 10 >= level[1]
                        ? ((level[0] += 10),
                          (level[1] = level[0]),
                          (cMaxTal = getMaxTalent(ascLevel[0])),
                          (dMaxTal = cMaxTal),
                          (ascLevel[1] = ascLevel[0]))
                        : (level[0] += 10),
                      (cMaxTal = getMaxTalent(ascLevel[0]))
                  "
                  class="
                    w-1/3
                    rounded-br-md
                    transition
                    duration-300
                    ease-in-out
                    bg-green-500
                    hover:bg-green-600 hover:text-black hover:scale-105
                  "
                >
                  +10
                </button>
              </div>
            </div>
            <!-- Desired Level -->
            <div
              class="bg-gray-500 rounded-md text-center border-2 border-black"
            >
              <p class="py-1 border-black border-b-2">Desired Level</p>
              <span class="text-lg" v-for="num in 6" :key="num">
                <button
                  @click="
                    (ascLevel[1] = num),
                      (level[1] = setNewLevel(ascLevel[1], level[1])),
                      (dMaxTal = getMaxTalent(ascLevel[1])),
                      dTal[0] > dMaxTal ? (dTal[0] = dMaxTal) : '',
                      dTal[1] > dMaxTal ? (dTal[1] = dMaxTal) : '',
                      dTal[2] > dMaxTal ? (dTal[2] = dMaxTal) : ''
                  "
                  class="
                    px-1
                    mx-px
                    rounded-full
                    text-black
                    font-bold
                    bg-blue-100 bg-opacity-30
                  "
                  v-if="num > ascLevel[1]"
                >
                  ✧
                </button>
                <button
                  @click="
                    ascLevel[1] == num ? ascLevel[1]-- : (ascLevel[1] = num),
                      (level[1] = setNewLevel(ascLevel[1], level[1])),
                      level[0] > level[1] || ascLevel[0] > ascLevel[1]
                        ? ((level[0] = level[1]),
                          (ascLevel[0] = ascLevel[1]),
                          (dMaxTal = getMaxTalent(ascLevel[1])),
                          (cMaxTal = dMaxTal))
                        : (dMaxTal = getMaxTalent(ascLevel[1])),
                      dTal[0] > dMaxTal ? (dTal[0] = dMaxTal) : '',
                      cTal[0] > dTal[0] ? (cTal[0] = dTal[0]) : '',
                      dTal[1] > dMaxTal ? (dTal[1] = dMaxTal) : '',
                      cTal[1] > dTal[1] ? (cTal[1] = dTal[1]) : '',
                      dTal[2] > dMaxTal ? (dTal[2] = dMaxTal) : '',
                      cTal[2] > dTal[2] ? (cTal[2] = dTal[2]) : ''
                  "
                  class="px-1 mx-px rounded-full bg-blue-100 bg-opacity-20"
                  v-else
                >
                  ✦
                </button>
              </span>
              <div
                class="
                  text-center
                  rounded-b-md
                  container
                  mx-auto
                  flex
                  justify-evenly
                "
              >
                <button
                  @click="
                    (ascLevel[1] = getAscension(level[1], level[1] - 10)),
                      level[1] <= 10
                        ? ((level[0] = 1), (level[1] = 1))
                        : level[1] - 10 <= level[0]
                        ? ((level[1] -= 10),
                          (level[0] = level[1]),
                          (dMaxTal = getMaxTalent(ascLevel[1])),
                          (cMaxTal = dMaxTal),
                          (ascLevel[0] = ascLevel[1]))
                        : (level[1] -= 10),
                      (dMaxTal = getMaxTalent(ascLevel[1])),
                      dTal[0] > dMaxTal ? (dTal[0] = dMaxTal) : '',
                      cTal[0] > dTal[0] ? (cTal[0] = dTal[0]) : '',
                      dTal[1] > dMaxTal ? (dTal[1] = dMaxTal) : '',
                      cTal[1] > dTal[1] ? (cTal[1] = dTal[1]) : '',
                      dTal[2] > dMaxTal ? (dTal[2] = dMaxTal) : '',
                      cTal[2] > dTal[2] ? (cTal[2] = dTal[2]) : ''
                  "
                  class="
                    w-1/3
                    transition
                    duration-300
                    ease-in-out
                    bg-red-500
                    hover:bg-red-600 hover:text-black
                    rounded-bl-md
                    hover:scale-105
                  "
                >
                  -10
                </button>
                <button
                  @click="
                    (ascLevel[1] = getAscension(level[1], level[1] - 1)),
                      level[1] <= 1
                        ? (level[1] = 1)
                        : level[1] - 1 <= level[0]
                        ? (level[1]--,
                          (level[0] = level[1]),
                          (dMaxTal = getMaxTalent(ascLevel[1])),
                          (cMaxTal = dMaxTal),
                          (ascLevel[0] = ascLevel[1]))
                        : level[1]--,
                      (dMaxTal = getMaxTalent(ascLevel[1])),
                      dTal[0] > dMaxTal ? (dTal[0] = dMaxTal) : '',
                      cTal[0] > dTal[0] ? (cTal[0] = dTal[0]) : '',
                      dTal[1] > dMaxTal ? (dTal[1] = dMaxTal) : '',
                      cTal[1] > dTal[1] ? (cTal[1] = dTal[1]) : '',
                      dTal[2] > dMaxTal ? (dTal[2] = dMaxTal) : '',
                      cTal[2] > dTal[2] ? (cTal[2] = dTal[2]) : ''
                  "
                  class="
                    w-1/3
                    transition
                    duration-300
                    ease-in-out
                    bg-red-400
                    hover:bg-red-600 hover:text-black hover:scale-105
                  "
                >
                  -1
                </button>
                <p class="w-1/3 bg-gray-900">{{ level[1] }}</p>
                <button
                  @click="
                    (ascLevel[1] = getAscension(level[1], level[1] + 1)),
                      level[1] >= 90 ? (level[1] = 90) : level[1]++,
                      (dMaxTal = getMaxTalent(ascLevel[1]))
                  "
                  class="
                    w-1/3
                    transition
                    duration-300
                    ease-in-out
                    bg-green-400
                    hover:bg-green-600 hover:text-black hover:scale-105
                  "
                >
                  +1
                </button>
                <button
                  @click="
                    (ascLevel[1] = getAscension(level[1], level[1] + 10)),
                      level[1] >= 80
                        ? (level[1] = 90)
                        : (level[1] = level[1] + 10),
                      (dMaxTal = getMaxTalent(ascLevel[1]))
                  "
                  class="
                    w-1/3
                    rounded-br-md
                    transition
                    duration-300
                    ease-in-out
                    bg-green-500
                    hover:bg-green-600 hover:text-black hover:scale-105
                  "
                >
                  +10
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Bottom Area -->

  <div
    class="bg-gray-800 p-4 rounded-t-lg mt-5 border-2 border-black text-white"
  >
    <ul
      class="
        flex flex-wrap
        content-around
        text-center
        justify-evenly
        items-center
        bg-gray-600
        border-2 border-black
        rounded-lg
      "
    >
      <li
        class="
          flex
          bg-gray-700
          rounded-2xl
          p-5
          flex-wrap
          m-3
          border-2 border-black
        "
      >
        <img class="h-20" src="/ascension/currency/mora.png" />
        <p class="p-3">
          Mora Needed
          <br />
          <br />
          <span
            class="
              bg-white
              py-1
              px-4
              text-black
              rounded-full
              border-2 border-black
            "
            >{{ mora }}
          </span>
        </p>
      </li>
      <li
        class="
          flex
          bg-gray-700
          rounded-2xl
          p-5
          flex-wrap
          m-3
          border-2 border-black
        "
      >
        <img
          class="h-20"
          src="/ascension/experience/adventurers-experience.png"
        />
        <p class="p-3">
          Experience Needed
          <br />
          <br />
          <span
            class="
              bg-white
              py-1
              px-4
              text-black
              rounded-full
              border-2 border-black
            "
            >{{ xp }}
          </span>
        </p>
      </li>
    </ul>
    <ul class="flex flex-wrap text-center justify-around items-center">
      <!-- Jewels -->
      <li
        class="
          flex
          bg-gray-700
          rounded-full
          p-5
          flex-wrap
          m-3
          border-2 border-black
        "
        v-for="(j, name, index) in thisJewel"
        :key="j"
        :class="jCount[index] == 0 ? 'hidden' : ''"
      >
        <img class="h-20" :src="j.image" />
        <p class="p-3">
          {{ j.name }}
          <br />
          <br />
          <span
            class="
              bg-white
              py-1
              px-4
              text-black
              rounded-full
              border-2 border-black
            "
            >{{ jCount[index] }}
          </span>
        </p>
      </li>
      <!-- Mob Drop -->
      <li
        class="
          flex
          bg-gray-700
          rounded-full
          p-5
          m-3
          border-2 border-black
          text-sm
        "
        v-for="(mob, name, index) in thisMob.mob_mats"
        :key="mob"
        :class="mCount[index] == 0 ? 'hidden' : ''"
      >
        <img class="h-20" :src="mob.image" />
        <p class="p-2">
          {{ mob.name }}
          <br />
          <br />
          <span
            class="
              bg-white
              py-1
              px-4
              text-black
              rounded-full
              border-2 border-black
            "
          >
            {{ mCount[index] }}
          </span>
        </p>
      </li>
      <!-- Boss -->
      <li
        class="
          flex
          bg-gray-700
          rounded-full
          p-5
          flex-wrap
          m-3
          border-2 border-black
        "
        :class="bmCount == 0 ? 'hidden' : ''"
      >
        <img class="h-20" :src="thisBoss.image" />
        <p class="p-3">
          {{ thisBoss.name }}
          <br />
          <br />
          <span
            class="
              bg-white
              py-1
              px-4
              text-black
              rounded-full
              border-2 border-black
            "
            >{{ bmCount }}
          </span>
        </p>
      </li>
      <!-- Books -->
      <li
        class="
          flex
          bg-gray-700
          rounded-full
          p-5
          m-3
          border-2 border-black
          text-sm
        "
        v-for="(b, name, index) in thisBook"
        :key="b"
        :class="bCount[index] == 0 ? 'hidden' : ''"
      >
        <img class="h-20" :src="b.image" />
        <p class="p-2">
          {{ b.name }}
          <br />
          <br />
          <span
            class="
              bg-white
              py-1
              px-4
              text-black
              rounded-full
              border-2 border-black
            "
          >
            {{ bCount[index] }}
          </span>
        </p>
      </li>
      <!-- Specialty -->
      <li
        class="
          flex
          bg-gray-700
          rounded-full
          p-5
          flex-wrap
          m-3
          border-2 border-black
        "
        :class="sCount == 0 ? 'hidden' : ''"
      >
        <img class="h-20" :src="thisSpecialty.image" />
        <p class="p-3">
          {{ thisSpecialty.name }}
          <br />
          <br />
          <span
            class="
              bg-white
              py-1
              px-4
              text-black
              rounded-full
              border-2 border-black
            "
            >{{ sCount }}
          </span>
        </p>
      </li>
      <!-- Weekly -->
      <li
        class="
          flex
          bg-gray-700
          rounded-full
          p-5
          flex-wrap
          m-3
          border-2 border-black
        "
        :class="wCount == 0 ? 'hidden' : ''"
      >
        <img class="h-20" :src="thisWeekly.image" />
        <p class="p-3">
          {{ thisWeekly.name }}
          <br />
          <br />
          <span
            class="
              bg-white
              py-1
              px-4
              text-black
              rounded-full
              border-2 border-black
            "
            >{{ wCount }}
          </span>
        </p>
      </li>
      <!-- Crown -->
      <li
        class="
          flex
          bg-gray-700
          rounded-full
          p-5
          flex-wrap
          m-3
          border-2 border-black
        "
        :class="crowns == 0 ? 'hidden' : ''"
      >
        <img class="h-20" src="/ascension/talents/crown-of-insight.png" />
        <p class="p-3">
          Crown of Insight
          <br />
          <br />
          <span
            class="
              bg-white
              py-1
              px-4
              text-black
              rounded-full
              border-2 border-black
            "
            >{{ crowns }}
          </span>
        </p>
      </li>
    </ul>
  </div>
</template>
