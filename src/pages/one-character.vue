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
</script>

<template>
  <div class="bg-black rounded-lg">
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
        <div class="bg-gray-700 text-center text-white rounded-tr-md">
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
                text-white
              "
            >
              <div class="p-2 break-words text-sm">
                {{ cTalents.name }}<br /><span
                  class="bg-black text-white px-1 py-0.5 rounded-full"
                  >{{ cTalents.unlock }}</span
                >
                <br />
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
                  @click="pressed()"
                  class="
                    w-1/3
                    transition
                    duration-500
                    ease-in-out
                    bg-red-500
                    hover:bg-red-600 hover:text-black hover:scale-105
                    rounded-bl-md
                  "
                >
                  -
                </button>
                <p class="w-1/3 bg-gray-900 text">index: {{ index }}</p>
                <button
                  class="
                    w-1/3
                    rounded-br-md
                    transition
                    duration-500
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

        <div class="bg-gray-800 text-center text-white rounded-tr-md">
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
                text-white
              "
            >
              <div class="p-2 break-words text-sm">
                {{ cTalents.name }} <br /><span
                  class="bg-black px-1 py-0.5 rounded-full"
                  >{{ cTalents.unlock }}</span
                >
                <br />
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
                <button
                  class="
                    w-1/3
                    transition
                    duration-500
                    ease-in-out
                    bg-red-500
                    hover:bg-red-600 hover:text-black hover:scale-105
                    rounded-bl-md
                  "
                >
                  -
                </button>
                <p class="w-1/3 bg-gray-900 text">Index: {{ index }}</p>
                <button
                  class="
                    w-1/3
                    rounded-br-md
                    transition
                    duration-500
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

        <div
          class="bg-blue-300 px-5 container justify-evenly flex rounded-br-md"
        >
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
                  <button
                    class="
                      w-1/3
                      transition
                      duration-500
                      ease-in-out
                      bg-red-500
                      hover:bg-red-600 hover:text-white
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
                      duration-500
                      ease-in-out
                      bg-green-500
                      hover:bg-green-600 hover:text-white
                    "
                  >
                    +
                  </button>
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
                  <button
                    class="
                      w-1/3
                      transition
                      duration-500
                      ease-in-out
                      bg-red-500
                      hover:bg-red-600 hover:text-white
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
                      duration-500
                      ease-in-out
                      bg-green-500
                      hover:bg-green-600 hover:text-white
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
