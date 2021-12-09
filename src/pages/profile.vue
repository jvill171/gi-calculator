<script setup>
import useAuth from "../composable/useAuth";
import { useLocal } from "../composable/useLocal";

const { ALL_CHARACTERS, ALL_ELEMENTS } = useLocal();
const { user } = useAuth();
</script>

<template>
  <div id="v-model-select" class="demo">
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
  </div>
</template>
