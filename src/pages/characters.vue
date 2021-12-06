<script setup>
import { ref } from "vue";

import { useLocal } from "../composable/useLocal";

const { ALL_CHARACTERS, ALL_ELEMENTS } = useLocal();

const myArr = [
  "Anemo",
  "Pyro",
  "Geo",
  "Hydro",
  "Cryo",
  "Electro",
  "Dendro",
  "Sword",
  "Claymore",
  "Catalyst",
  "Polearm",
  "Bow",
];
const filterOut = ref([]);
const inFilter = (f, s) => {
  //True/False
  return !s.includes(f);
};
const addRemItem = (f, s) => {
  if (!s.includes(f)) {
    s.push(f);
  } else {
    for (let i = 0; i < s.length; i++) {
      if (s[i] == f) {
        s.splice(i, 1);
        break;
      }
    }
  }
  return s;
};
</script>

<template>
  <div
    class="
      flex-col flex
      items-center
      justify-center
      min-h-screen-nonav
      text-center 
    "
  >
    <div class="absolute top-16 w-full">
      <div class="mx-20">
        <div class="sticky top-0 z-50">
          <h2
            class="
              mt-5
              p-3
              text-6xl
              z-50
              bg-gray-900
              text-white
              rounded-t-lg
              sticky
              top-0
            "
          >
            Characters
          </h2>
          <ul class="bg-gray-300 flex flex-wrap justify-center">
            <button
              @click="filterOut = addRemItem(f, [...filterOut])"
              class="px-2 m-1 rounded-full ring-inset ring-black ring-2"
              v-for="f in myArr"
              :key="f"
              :class="
                f === 'Anemo'
                  ? inFilter(f, [...filterOut])
                    ? 'bg-green-400'
                    : 'bg-green-400 opacity-30'
                  : f === 'Pyro'
                  ? inFilter(f, [...filterOut])
                    ? 'bg-red-500'
                    : 'bg-red-500 opacity-30'
                  : f === 'Hydro'
                  ? inFilter(f, [...filterOut])
                    ? 'bg-blue-500'
                    : 'bg-blue-500 opacity-30'
                  : f === 'Cryo'
                  ? inFilter(f, [...filterOut])
                    ? 'bg-blue-300'
                    : 'bg-blue-300 opacity-30'
                  : f === 'Dendro'
                  ? inFilter(f, [...filterOut])
                    ? 'bg-green-700'
                    : 'bg-green-700 opacity-30'
                  : f === 'Geo'
                  ? inFilter(f, [...filterOut])
                    ? 'bg-yellow-400'
                    : 'bg-yellow-400 opacity-30'
                  : f === 'Electro'
                  ? inFilter(f, [...filterOut])
                    ? 'bg-purple-500'
                    : 'bg-purple-500 opacity-30'
                  : inFilter(f, [...filterOut])
                  ? 'bg-white'
                  : 'bg-white opacity-30'
              "
            >
              {{ f }}
            </button>
            <button></button>
          </ul>
        </div>
        <ul
          class="
            flex flex-wrap
            bg-gray-600
            py-5
            rounded-b-lg
            items-stretch
            justify-center
            mb-10
          "
        >
          <router-link
            v-for="x in ALL_CHARACTERS"
            :key="x"
            class="
              m-2
              w-auto
              bg-gray-200
              rounded-lg
              drop-shadow-lg
              hover:scale-105
            "
            :to="`/characters/${x.name}`"
            :class="
              filterOut.includes(x.element.name) ||
              filterOut.includes(x.weapon.name)
                ? 'hidden'
                : ''
            "
          >
            <div class="absolute w-7">
              <div>
                <img
                  class="relative p-px m-1 rounded-full bg-gray-700 border-2"
                  :class="
                    x.element.name === 'Anemo'
                      ? 'border-green-500'
                      : x.element.name === 'Pyro'
                      ? 'border-red-500'
                      : x.element.name === 'Hydro'
                      ? 'border-blue-500'
                      : x.element.name === 'Cryo'
                      ? 'border-blue-300'
                      : x.element.name === 'Dendro'
                      ? 'border-green-700'
                      : x.element.name === 'Geo'
                      ? 'border-yellow-400'
                      : x.element.name === 'Electro'
                      ? 'border-purple-500'
                      : 'border-black'
                  "
                  :src="x.element.image"
                  :title="x.element.name"
                />
                <!-- 
                :src="x.element.image"
                :title="x.element.name" -->
              </div>
              <div>
                <img
                  class="
                    relative
                    m-1
                    rounded-full
                    bg-white
                    border-2 border-gray-600
                  "
                  :src="x.weapon.image"
                  :title="x.weapon.name"
                />
              </div>
            </div>
            <img
              :src="x.icon"
              class="bg-cover rounded-t-md"
              :class="x.rarity === 5 ? 'bg-5_star' : 'bg-4_star'"
            />
            <p class="text-center">{{ x.name }}</p>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>
