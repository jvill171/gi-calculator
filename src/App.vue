<script setup>
import Nav from "./components/Nav.vue"
</script>

<template>
<div class=" font-genshinFont bg-gray-400">
  <Nav/>
  <div class="container mx-auto">
    <router-view />
  </div>
</div>
</template>