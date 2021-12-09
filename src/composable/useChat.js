import { ref } from "vue";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  where,
  getDocs,
} from "firebase/firestore";

import { db } from "./useFirebase";
import useAuth from "./useAuth";

const { user } = useAuth();

const messages = ref([]);

const useChat = () => {
  const chatCollection = collection(db, "chat");
  const prefCollection = collection(db, "preferences");

  const chatQuery = query(chatCollection, orderBy("createdAt", "desc"));

  const unsubscribe = onSnapshot(chatQuery, (querySnapshot) => {
    messages.value = [];
    querySnapshot.forEach((doc) => {
      messages.value.push({ id: doc.id, ...doc.data() });
    });
  });

  const sendMessage = async (message) => {
    const myImage = query(prefCollection, where("author", "==", user.value));
    const q = await getDocs(myImage);
    var myCh = "";
    var myE = "";
    q.forEach((doc) => {
      myCh += doc.data().myChar;
      myE += doc.data().myElem;
    });
    console.log("Yo");
    console.log(myCh);
    console.log("bye");
    if (myCh == "") {
      myCh = "/characters_icon/traveler.png";
    } else {
      myCh = `/characters_icon/${myCh.toLocaleLowerCase()}.png`;
    }
    if (myE == "") {
      myE = "None";
    }

    await addDoc(chatCollection, {
      text: message,
      author: user.value,
      createdAt: new Date(),
      image: myCh,
      element: myE,
    });
  };

  return { messages, unsubscribe, sendMessage };
};

export default useChat;
