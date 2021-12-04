<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
//import { useAPI } from "../composable/useAPI";
import { useLocal } from "../composable/useLocal";

const route = useRoute();
const { name } = route.params;
//console.log(name);

const { getCharacter, getBooks, getJewels, getBoss, getSpecialty } = useLocal();

const thisCharacter = getCharacter(name);
const thisBook = getBooks(name);
const thisJewel = getJewels(name);
const thisBoss = getBoss(name);
const thisSpecialty = getSpecialty(name);

const XPCounter = [
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

const cTal = ref([1, 1, 1]);
const dTal = ref([1, 1, 1]);
const cMaxTal = ref(1);
const dMaxTal = ref(1);

const level = ref([1, 1]);
const bCount = ref([0, 0, 0]);
const jCount = ref([0, 0, 0, 0]);
const bmCount = ref(0);
const sCount = ref(0);
const mora = ref(0);
const ascLevel = ref([0, 0]);

//non-dynamic variables
const calcXP = () => {
  let max = 90;
  totalXP = 0;
  for (let min = 1; min < max; min++) {
    totalXP += XPCounter[min];
  }
  console.log(totalXP);
  ascensionCount = totalXP;
  return totalXP;
};

//Relies on non-dynamic variables, fix this
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
  console.log(asc);
  console.log(cLevel);
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
      <div class="rounded-r-lg grid grid-rows-3 w-2/3 text-white">
        <!-- Current Talents -->
        <div class="bg-gray-700 text-center rounded-tr-md">
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
        <div class="bg-gray-800 text-center rounded-tr-md">
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
          class="bg-gray-700 px-5 container justify-evenly flex rounded-br-md"
        >
          <!-- Level -->
          <div
            class="self-center container flex flex-col space-y-5 w-1/2 p-2 \"
          >
            <p class="text-center pb-5 underline">Character Level</p>
            <div
              class="rounded-md text-center h-3/4 border-2 border-black w-full"
            >
              <p class="py-1 border-black border-b-2">Current Level</p>
              <span class="text-lg" v-for="(num, name, index) in 6" :key="num">
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
                    bg-blue-100 bg-opacity-20
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
                  h-1/4
                  rounded-b-md
                  container
                  mx-auto
                  flex
                  justify-evenly
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
            <div
              class="
                bg-gray-600
                rounded-md
                text-center
                h-3/4
                border-2 border-black
              "
            >
              <p class="py-1 border-black border-b-2">Desired Level</p>
              <span class="text-lg" v-for="(num, name, index) in 6" :key="num">
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
                    bg-blue-100 bg-opacity-20
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
                  h-1/4
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

          <!-- Divider -->
          <div class="bg-black w-px"></div>
          <!-- Ascension -->
          <div class="text-center self-center">
            <div class="container flex space-x-3 px-3 py-2">
              <div
                class="bg-gray-400 rounded-md text-center h-3/4 border-gray-700"
              >
                <p class="underline px-6">Ascension Level</p>
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
                  <button
                    class="
                      w-1/3
                      transition
                      duration-300
                      ease-in-out
                      bg-red-500
                      hover:bg-red-600 hover:text-black
                      rounded-bl-md
                    "
                  >
                    -
                  </button>
                  <p class="w-1/3 bg-white">10</p>
                  <button
                    class="
                      w-1/3
                      rounded-br-md
                      transition
                      duration-300
                      ease-in-out
                      bg-green-500
                      hover:bg-green-600 hover:text-black
                    "
                  >
                    +
                  </button>
                </div>
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
        justify-between
        items-center
      "
    >
      <!-- Books
        :class="bookCount[index] <= 0 ? 'hidden' : ''" -->
      <div
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
        <div></div>
      </div>
      <!-- Jewels -->
      <div
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
      </div>
      <div
        class="
          flex
          bg-gray-700
          rounded-full
          p-5
          flex-wrap
          m-3
          border-2 border-black
        "
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
      </div>
      <div
        class="
          flex
          bg-gray-700
          rounded-full
          p-5
          flex-wrap
          m-3
          border-2 border-black
        "
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
      </div>
    </ul>
  </div>
</template>
