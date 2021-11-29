<script setup>
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
//console.log(thisCharacter);
// console.log(thisBook);

//<h3>Hi {{characters.name}}</h3> THIS GOES IN THE TEMPLATE
</script>

<template>
  <div class="bg-white rounded-lg">
    <div class="container flex mt-10 border-2 border-black rounded-lg">
      <div class="w-1/3">
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
  <div class="bg-gray-800 p-4 rounded-t-lg mt-5 border-2 border-black">
    <ul
      class="
        flex flex-wrap
        content-around
        text-center
        justify-between
        items-center
      "
    >
      <div
        class="
          flex
          bg-gray-700
          rounded-full
          text-white
          p-5
          m-3
          border-2 border-black
        "
        v-for="b in thisBook"
        :key="b"
      >
        <img class="h-20" :src="b.image" />
        <p class="p-2 text-sm">
          {{ b.name }}
          <br />
          <br />
          <span
            class="bg-white p-1 text-black rounded-full border-2 border-black"
            >( x{{}} )
          </span>
        </p>
      </div>

      <div
        class="
          flex
          bg-gray-700
          rounded-full
          text-white
          p-5
          flex-wrap
          m-3
          border-2 border-black
        "
        v-for="j in thisJewel"
        :key="j"
      >
        <img class="h-20" :src="j.image" />
        <p class="p-3 text-sm">
          {{ j.name }}
          <br />
          <br />
          <span
            class="bg-white p-1 text-black rounded-full border-2 border-black"
            >( x{{}} )
          </span>
        </p>
      </div>
      <div
        class="
          flex
          bg-gray-700
          rounded-full
          text-white
          p-5
          flex-wrap
          m-3
          border-2 border-black
        "
      >
        <img class="h-20" :src="thisBoss.image" />
        <p class="p-3 text-sm">
          {{ thisBoss.name }}
          <br />
          <br />
          <span
            class="bg-white p-1 text-black rounded-full border-2 border-black"
            >( x{{}} )
          </span>
        </p>
      </div>
      <div
        class="
          flex
          bg-gray-700
          rounded-full
          text-white
          p-5
          flex-wrap
          m-3
          border-2 border-black
        "
      >
        <img class="h-20" :src="thisSpecialty.image" />
        <p class="p-3 text-sm">
          {{ thisSpecialty.name }}
          <br />
          <br />
          <span
            class="bg-white p-1 text-black rounded-full border-2 border-black"
            >( x{{}} )
          </span>
        </p>
      </div>
    </ul>
  </div>
</template>
