<script setup>
import {useRouter} from "vue-router";
import useAuth from "../composable/useAuth";

const { isAuthenticated, logout } = useAuth();

const router = useRouter();

const loggingOut = () => {
    logout();
    router.push("/");
}
</script>

<template>
    <div class="bg-pink-400">
        <div class="container mx-auto flex items-center justify-between text-green-50">
            <h1 class="tracking-tighter text-3xl font-thin">
                Vue<span class="font-semibold">RealAuth</span>
            </h1>
            <nav>
                <ul class="flex space-x-4">
                    <router-link to="/">
                        <li class="py-5 px-4 hover:cursor-pointer hover:bg-pink-300">Home</li>
                    </router-link>
                    <router-link to="/about">
                        <li class="py-5 px-4 hover:cursor-pointer hover:bg-pink-300">About</li>
                    </router-link>
                    <router-link v-if="!isAuthenticated" to="/login">
                        <li class="py-5 px-4 hover:cursor-pointer hover:bg-pink-300">Login</li>
                    </router-link>
                    <div v-else class="flex">
                        <router-link to="/secret">
                            <li class="py-5 px-4 hover:cursor-pointer hover:bg-pink-300">Secret</li>
                        </router-link>
                        <button  @click="loggingOut">
                            <li class="py-5 px-4 hover:cursor-pointer hover:bg-pink-300">Logout</li>
                        </button>
                    </div>
                </ul>
            </nav>
        </div>
    </div>
</template>