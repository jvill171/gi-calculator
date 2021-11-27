<script setup>
import { ref } from "vue";

import { useLocal } from "../composable/useLocal";

const { ALL_CHARACTERS, localRare, localElement, localWeapon } = useLocal();
</script>

<template>
  <div class="flex-col flex items-center justify-center min-h-screen-nonav">
    <div class="text-center">
      <h2 class="mt-5 p-3 text-6xl z-50 bg-gray-900 text-white rounded-t-lg">
        Characters
      </h2>

      <ul
        class="
          flex flex-wrap
          bg-gray-600
          p-5
          rounded-b-lg
          items-stretch
          justify-center
          mb-10
        "
      >
        <router-link
          v-for="x in ALL_CHARACTERS"
          :key="x"
          class="m-2 w-auto bg-gray-200 rounded-lg drop-shadow-lg"
          :to="`/characters/${x.name}`"
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
              <!-- x.image = ../assets/elements/hydro.png
                    i set all objects to the same URL for testing -->
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
</template>
