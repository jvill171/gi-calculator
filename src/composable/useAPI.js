import { ref } from "vue";
import axios from "axios";

const characters = ref([]);

const api = axios.create({
  baseURL: "https://api.genshin.dev/",
});

export const useAPI = () => {
  const getCharacters = async (charName) => {
    console.log()
    const response = await api.get(`/characters/${charName}`);
    console.log(response.data);
    characters.value = response.data;
  };

  getCharacters();
  return { characters, getCharacters };
};

/*
"albedo", 
"aloy", 
"amber", 
"ayaka", 
"barbara", 
"beidou", 
"bennett", 
"chongyun", 
"diluc", 
"diona", 
"eula", 
"fischl", 
"ganyu", 
"hu-tao", 
"jean", 
"kaeya", 
"kazuha", 
"keqing", 
"klee", 
"kokomi", 
"lisa", 
"mona", 
"ningguang", 
"noelle", 
"qiqi", 
"raiden", 
"razor", 
"rosaria", 
"sara", 
"sayu", 
"sucrose", 
"tartaglia", 
"traveler-anemo",
"traveler-electro",
"traveler-geo", 
"venti", 
"xiangling", 
"xiao", 
"xingqiu", 
"xinyan", 
"yanfei", 
"yoimiya", 
"zhongli" */
