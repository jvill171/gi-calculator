<script setup>
import { useRouter } from "vue-router";
import useAuth from "../composable/useAuth";

const { isAuthenticated, logout } = useAuth();

const router = useRouter();

const loggingOut = () => {
  logout();
  router.push("/");
};
</script>

<template>
  <div class="bg-gray-600">
    <div
      class="container mx-auto flex items-center justify-between text-gray-50"
    >
      <h1 class="tracking-tighter font-thin text-center">
        Genshin Impact<br />Material Calculator
      </h1>
      <nav class="flex-initial items-center justify-end">
        <ul class="flex items-center space-x-2">
          <router-link to="/">
            <li
              class="
                py-5
                px-4
                hover:cursor-pointer hover:bg-gray-300 hover:text-black
              "
            >
              Home
            </li>
          </router-link>
          <router-link to="/characters">
            <li
              class="
                h-full
                py-5
                px-4
                hover:cursor-pointer hover:bg-gray-300 hover:text-black
              "
            >
              Characters
            </li>
          </router-link>
          <router-link v-if="!isAuthenticated" to="/login">
            <li
              class="
                h-full
                py-5
                px-4
                hover:cursor-pointer hover:bg-gray-300 hover:text-black
              "
            >
              Login
            </li>
          </router-link>
          <div v-else class="flex items-center">
            <router-link to="/community">
              <li
                class="
                  h-full
                  py-5
                  px-4
                  hover:cursor-pointer hover:bg-gray-300 hover:text-black
                "
              >
                Chat
              </li>
            </router-link>
            <router-link to="/profile">
              <li
                class="
                  h-full
                  py-5
                  px-4
                  hover:cursor-pointer hover:bg-gray-300 hover:text-black
                "
              >
                Profile
              </li>
            </router-link>
            <button @click="loggingOut">
              <li
                class="
                  h-full
                  py-5
                  px-4
                  hover:cursor-pointer hover:bg-gray-300 hover:text-black
                "
              >
                Logout
              </li>
            </button>
          </div>
        </ul>
      </nav>
    </div>
  </div>
</template>
