import { ref } from "vue";
import axios from "axios";

const characters = ref([]);

const api = axios.create({
  baseURL: "https://api.genshin.dev/",
});

export const useAPI = () => {
  const getCharacters = async (charName) => {
    console.log();
    const response = await api.get(`/characters/${charName}`);
    console.log(response.data);
    characters.value = response.data;
  };

  getCharacters();
  return { characters, getCharacters };
};
