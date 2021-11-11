<script setup>
import useAuth from '../composable/useAuth';
const {isAuthenticated, user} = useAuth();
</script>

<template >
<div class="flex-col space-y-12 flex items-center justify-center min-h-screen-nonav">
    <h2 class="text-6xl font-extralight tracking-tighter">Welcome <span v-if="isAuthenticated">{{user}}</span></h2>
    <img src="../assets/bg_index.png" alt="Hello BG">
</div>
</template>