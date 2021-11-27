<script setup>
import useAuth from "../composable/useAuth";
const { isAuthenticated, user } = useAuth();
</script>

<template>
  <div
    class="
      flex-col
      space-y-12
      flex
      items-center
      justify-center
      min-h-screen-nonav
    "
  >
    <h2 class="text-6xl font-extralight tracking-tighter">
      Welcome <span v-if="isAuthenticated">{{ user }}</span
      ><span v-else>Traveler</span>!
    </h2>
    <div class="bg-gray-800 rounded-full p-10">
      <img src="/characters_full/Paimon.png" alt="Hello BG" />
    </div>
  </div>
</template>
