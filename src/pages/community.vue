<script setup>
import { onUnmounted, ref } from "vue";
import useChat from "../composable/useChat";
import useAuth from "../composable/useAuth";
const { messages, unsubscribe, sendMessage, getImage, q } = useChat();
const { user } = useAuth();
const newMessage = ref("");
const myQuery = q;
const send = () => {
  sendMessage(newMessage.value);
  newMessage.value = "";
};
onUnmounted(() => {
  unsubscribe();
});
</script>

<template>
  <div class="mx-10">
    <h1
      class="
        bg-gray-500
        py-3
        rounded-t-lg
        font-thin
        tracking-tighter
        text-center
        mt-8
        text-5xl
        md:text-7xl
      "
    >
      Genshin Community Chat
    </h1>
    <div
      class="
        min-h-[500px]
        w-full
        bg-gray-800
        rounded-b-lg
        shadow-2xl
        flex flex-col
        justify-between
      "
    >
      <ul class="p-4 space-y-4">
        <li v-for="m in messages" :key="m.id">
          <div class="flex justify-between px-4 py-4 rounded-lg bg-gray-200">
            <span>{{ m.text }}</span
            ><span
              >by {{ m.author
              }}<span>
                <img
                  class="
                    inline-block
                    w-10
                    rounded-full
                    ring-1 ring-black
                    ml-2
                    bg-opacity-70
                  "
                  :src="m.image"
                  :class="[(m.element == 'Anemo'
                      ? 'bg-green-400'
                      : m.element == 'Pyro'
                      ? 'bg-red-500'
                      : m.element == 'Hydro'
                      ? 'bg-blue-500'
                      : m.element == 'Cryo'
                      ? 'bg-blue-300'
                      : m.element == 'Dendro'
                      ? 'bg-green-700'
                      : m.element == 'Geo'
                      ? 'bg-yellow-400'
                      : m.element == 'Electro'
                      ? 'bg-purple-500'
                      : 'bg-gray-400'),
                    user == m.author ? 'animate-bounce' : '']
                    
                  " /></span
            ></span>
          </div>
        </li>
      </ul>
      <div>
        <input
          class="w-full p-4 rounded-lg focus:outline-none"
          type="text"
          placeholder="Type a message..."
          v-model="newMessage"
          @change="send"
        />
      </div>
    </div>
  </div>
</template>
