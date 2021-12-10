<script setup>
import { onUnmounted, ref } from "vue";
import useAuth from "../composable/useAuth";
import { useLocal } from "../composable/useLocal";
import useChat from "../composable/useChat";

const { ALL_CHARACTERS, ALL_ELEMENTS } = useLocal();
const { user } = useAuth();
const { getProfile, updateProfile, myProfileInfo } = useChat();

const selectedBoth = ref([false, false]);
const selectChar = ref("");
const selectElem = ref("");
const myElement = ref("");

const save = () => {
  updateProfile(selectChar.value, selectElem.value, myProfileInfo.value[2]);
};
const varLower = (inValue) => {
  inValue = inValue.replace(/\s+/g, "-").toLowerCase();
  return inValue;
};

onUnmounted(() => {
  getProfile();
});
</script>

<template>
  <div class="text-center my-5 text-5xl">
    <h2>{{ user }}'s Profile</h2>
  </div>
  <div>
    <div class="grid grid-cols-2 gap-5 text-center text-3xl py-9 text-white">
      <!-- Current Profile -->
      <div>
        <h2 class="bg-gray-900 rounded-t-xl py-2">Current Profile</h2>
        <div
          class="
            flex
            h-full
            items-center
            justify-center
            bg-gray-300
            rounded-b-xl
          "
        >
          <img
            class="rounded-full ring-4 ring-black"
            :src="`/characters_icon/${varLower(myProfileInfo[1])}.png`"
            :class="
              myProfileInfo[0] == 'Anemo'
                ? 'bg-green-400'
                : myProfileInfo[0] == 'Pyro'
                ? 'bg-red-500'
                : myProfileInfo[0] == 'Hydro'
                ? 'bg-blue-500'
                : myProfileInfo[0] == 'Cryo'
                ? 'bg-blue-300'
                : myProfileInfo[0] == 'Dendro'
                ? 'bg-green-700'
                : myProfileInfo[0] == 'Geo'
                ? 'bg-yellow-400'
                : myProfileInfo[0] == 'Electro'
                ? 'bg-purple-500'
                : 'bg-gray-400'
            "
          />
        </div>
      </div>

      <!-- New Profile -->
      <div>
        <h2 class="bg-gray-900 rounded-t-xl py-2">New Profile</h2>
        <div
          class="
            flex
            h-full
            items-center
            justify-center
            bg-gray-300
            rounded-b-xl
          "
        >
          <div v-if="selectedBoth[0] && selectedBoth[1]">
            <img
              class="rounded-full ring-4 ring-black"
              :class="
                selectElem == 'Anemo'
                  ? 'bg-green-400'
                  : selectElem == 'Pyro'
                  ? 'bg-red-500'
                  : selectElem == 'Hydro'
                  ? 'bg-blue-500'
                  : selectElem == 'Cryo'
                  ? 'bg-blue-300'
                  : selectElem == 'Dendro'
                  ? 'bg-green-700'
                  : selectElem == 'Geo'
                  ? 'bg-yellow-400'
                  : selectElem == 'Electro'
                  ? 'bg-purple-500'
                  : 'bg-gray-400'
              "
              :src="`/characters_icon/${varLower(selectChar)}.png`"
            />
          </div>
          <div v-else class="text-black px-4">
            Select a favorite Element and Character
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Save -->
  <div class="flex h-full justify-center mt-6 mb-2">
    <button
      @click="!selectedBoth[0] ? '' : !selectedBoth[1] ? '' : save()"
      class="bg-gray-900 text-white p-3 m-2 rounded-2xl hover:scale-110"
      :class="
        !selectedBoth[0]
          ? 'opacity-50'
          : !selectedBoth[1]
          ? 'opacity-50'
          : 'opacity-100'
      "
    >
      <p class="text-3xl">Save</p>
    </button>
  </div>

  <div class="text-center grid grid-cols-4 gap-5">
    <div class="col-span-1 bg-gray-300 rounded-lg">
      <h2 class="py-2 bg-gray-900 text-white rounded-t-lg text-xl">
        Your favorite Element
      </h2>
      <div class="flex flex-wrap justify-center py-2 h-full">
        <div
          @click="(selectElem = 'None'), (selectedBoth[0] = true)"
          class="p-2 mx-1"
        >
          <img
            class="md:m-2 w-20 rounded-full bg-white ring-black"
            :class="
              selectElem == 'None' ? 'ring-4  scale-125' : 'ring-2 hover:p-2'
            "
            src="/elements/adaptive.png"
            title="None"
          />
        </div>
        <div class="p-2 mx-1" v-for="x in ALL_ELEMENTS" :key="x">
          <img
            @click="(selectElem = x.name), (selectedBoth[0] = true)"
            class="w-20 rounded-full hover:scale-110 p-2 ring-black"
            :src="x.image"
            :title="x.name"
            :class="[
              selectElem == x.name ? 'ring-4  scale-125' : 'ring-2 hover:p-2',
              x.name == 'Anemo'
                ? 'bg-green-400'
                : x.name == 'Pyro'
                ? 'bg-red-500'
                : x.name == 'Hydro'
                ? 'bg-blue-500'
                : x.name == 'Cryo'
                ? 'bg-blue-300'
                : x.name == 'Dendro'
                ? 'bg-green-700'
                : x.name == 'Geo'
                ? 'bg-yellow-400'
                : x.name == 'Electro'
                ? 'bg-purple-500'
                : 'bg-gray-400',
            ]"
          />
          <span></span>
        </div>
      </div>
    </div>
    <div class="col-span-3 bg-gray-300 rounded-lg">
      <h2 class="py-2 bg-gray-900 text-white rounded-t-lg text-xl">
        Your favorite character
      </h2>
      <div class="flex flex-wrap justify-center p-2">
        <div @click="(selectChar = 'Traveler'), (selectedBoth[1] = true)">
          <img
            class="m-2 w-20 rounded-full ring-black"
            src="/characters_icon/traveler.png"
            title="Traveler"
            :class="
              selectChar == 'Traveler'
                ? 'ring-4 bg-gray-600 scale-125'
                : 'ring-2 hover:p-2'
            "
          />
        </div>
        <div
          class=""
          v-for="x in ALL_CHARACTERS"
          :key="x"
          @click="(selectChar = x.name), (selectedBoth[1] = true)"
        >
          <img
            class="m-2 w-20 rounded-full ring-black"
            :src="x.icon"
            :title="x.name"
            :class="
              selectChar == x.name
                ? 'ring-4 bg-gray-600 scale-125'
                : 'ring-2 hover:p-2'
            "
          />
          <!-- :class="x.icon == " -->
          <span></span>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="col-span-1 flex h-full justify-center items-center">
      <div>
        <img
          class="m-2 rounded-full ring-2 ring-black hover:scale-110"
          src="/characters_icon/traveler.png"
        />
      </div>
    </div> -->
</template>
