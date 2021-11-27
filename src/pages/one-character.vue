<script setup>
import { useRoute } from "vue-router";
//import { useAPI } from "../composable/useAPI";
import { useLocal } from "../composable/useLocal";

const route = useRoute();
const { name } = route.params;

console.log(name);

const { ALL_CHARACTERS, getCharacter } = useLocal();

const thisCharacter = getCharacter(name);
console.log(thisCharacter.element.name);

//<h3>Hi {{characters.name}}</h3> THIS GOES IN THE TEMPLATE
</script>

<template>
  <div class="bg-white rounded-md">
    <div class="container flex mt-10">
      <div class="rounded-l-lg w-1/3">
        <img
          :src="thisCharacter.image"
          class="bg-gray-800 rounded-tl-md text-xl w-full h-auto"
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

      <div class="rounded-r-lg grid grid-rows-3 w-2/3">
        <div class="bg-gray-300 text-center rounded-tr-md">
          <p class="underline">Talents (Current)</p>
          <div class="container flex space-x-3 px-3 py-2">
            <div
              class="
                self-end
                bg-gray-400
                rounded-md
                text-center
                w-1/3
                h-3/4
                border-gray-700
              "
            >
              <div class="p-2 break-words text-sm">
                Talent_1_NAME <br />(Normal Attack)
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
                <button class="w-1/3 bg-red-500 rounded-bl-md">-</button>
                <p class="w-1/3 bg-white">10</p>
                <button class="w-1/3 bg-green-500 rounded-br-md">+</button>
              </div>
            </div>
            <div
              class="
                self-end
                bg-gray-400
                rounded-md
                text-center
                w-1/3
                h-3/4
                border-gray-700
              "
            >
              <div class="p-2 break-words text-sm">
                Talent_2_NAME big name <br />(Elemental Skill)
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
                <button class="w-1/3 bg-red-500 rounded-bl-md">-</button>
                <p class="w-1/3 bg-white">10</p>
                <button class="w-1/3 bg-green-500 rounded-br-md">+</button>
              </div>
            </div>
            <div
              class="
                self-end
                bg-gray-400
                rounded-md
                text-center
                w-1/3
                h-3/4
                border-gray-700
              "
            >
              <div class="p-2 break-words text-sm">
                Talent_3_NAME <br />(Elemental Burst)
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
                <button class="w-1/3 bg-red-500 rounded-bl-md">-</button>
                <p class="w-1/3 bg-white">10</p>
                <button class="w-1/3 bg-green-500 rounded-br-md">+</button>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-red-300 text-center">
          <p class="underline">Talents (Target)</p>
          <div class="container flex space-x-3 px-3 py-2">
            <div
              class="
                self-end
                bg-gray-400
                rounded-md
                text-center
                w-1/3
                h-3/4
                border-gray-700
              "
            >
              <div class="p-2 break-words text-sm">
                Talent_1_NAME <br />(Normal Attack)
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
                <button class="w-1/3 bg-red-500 rounded-bl-md">-</button>
                <p class="w-1/3 bg-white">10</p>
                <button class="w-1/3 bg-green-500 rounded-br-md">+</button>
              </div>
            </div>
            <div
              class="
                self-end
                bg-gray-400
                rounded-md
                text-center
                w-1/3
                h-3/4
                border-gray-700
              "
            >
              <div class="p-2 break-words text-sm">
                Talent_2_NAME big name <br />(Elemental Skill)
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
                <button class="w-1/3 bg-red-500 rounded-bl-md">-</button>
                <p class="w-1/3 bg-white">10</p>
                <button class="w-1/3 bg-green-500 rounded-br-md">+</button>
              </div>
            </div>
            <div
              class="
                self-end
                bg-gray-400
                rounded-md
                text-center
                w-1/3
                h-3/4
                border-gray-700
              "
            >
              <div class="p-2 break-words text-sm">
                Talent_3_NAME <br />(Elemental Burst)
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
                <button class="w-1/3 bg-red-500 rounded-bl-md">-</button>
                <p class="w-1/3 bg-white">10</p>
                <button class="w-1/3 bg-green-500 rounded-br-md">+</button>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-blue-300 px-5 container justify-evenly flex">
          <div class="self-center">
            <div class="container flex space-x-3 px-3 py-2">
              <div
                class="bg-gray-400 rounded-md text-center h-3/4 border-gray-700"
              >
                <p class="underline px-6">Character Level</p>
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
                  <button class="w-1/3 bg-red-500 rounded-bl-md">-</button>
                  <p class="w-1/3 bg-white">10</p>
                  <button class="w-1/3 bg-green-500 rounded-br-md">+</button>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-black w-px"></div>

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
                  <button class="w-1/3 bg-red-500 rounded-bl-md">-</button>
                  <p class="w-1/3 bg-white">10</p>
                  <button class="w-1/3 bg-green-500 rounded-br-md">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-purple-300 w-full p-5 rounded-br-md text-center">
          <div>Materials</div>
          <div class="container flex justify-evenly">
            <p>Specialty</p>
            <p>Specialty</p>
            <p>Specialty</p>
            <p>Specialty</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
