import { ref } from "vue";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  getDocs,
  updateDoc,
  where,
  doc,
} from "firebase/firestore";

import { db } from "./useFirebase";
import useAuth from "./useAuth";

const { user } = useAuth();

const messages = ref([]);
const myProfileInfo = ref([]);

const useChat = () => {
  const chatCollection = collection(db, "chat");
  const prefCollection = collection(db, "preferences");

  const chatQuery = query(chatCollection, orderBy("createdAt", "desc"));
  const prefQuery = query(prefCollection, where("author", "==", user.value));

  const unsubscribe = onSnapshot(chatQuery, (querySnapshot) => {
    messages.value = [];
    querySnapshot.forEach((doc) => {
      messages.value.push({ id: doc.id, ...doc.data() });
    });
  });

  const makeProfile = async () => {
    const q = await getDocs(prefQuery);
    //create the message data
    await addDoc(prefCollection, {
      author: user.value,
      myChar: "Traveler",
      myElem: "None",
    });
  };

  const getProfile = onSnapshot(prefQuery, (querySnapshot) => {
    myProfileInfo.value = [];
    querySnapshot.forEach((doc) => {
      myProfileInfo.value.push(doc.data().myElem, doc.data().myChar, doc.id);
    });
    if (myProfileInfo.value.length == 0) {
      makeProfile();
      querySnapshot.forEach((doc) => {
        myProfileInfo.value.push(doc.data().myElem, doc.data().myChar, doc.id);
      });
    }
  });

  const sendMessage = async (message) => {
    const q = await getDocs(prefQuery);
    var myCh = "";
    var myE = "";
    q.forEach((doc) => {
      myCh += doc.data().myChar;
      myE += doc.data().myElem;
    });
    if (myCh == "") {
      myCh = "/characters_icon/traveler.png";
    } else {
      myCh = myCh.replace(/\s+/g, "-");
      myCh = `/characters_icon/${myCh.toLocaleLowerCase()}.png`;
    }
    if (myE == "") {
      myE = "None";
    }
    //create the message data
    await addDoc(chatCollection, {
      text: message,
      author: user.value,
      createdAt: new Date(),
      image: myCh,
      element: myE,
    });
  };
  const updateProfile = async (newChar, newElem, myID) => {
    const docRef = doc(db, "preferences", myID);
    await updateDoc(docRef, {
      myChar: newChar,
      myElem: newElem,
    });
  };
  return {
    messages,
    myProfileInfo,
    unsubscribe,
    sendMessage,
    getProfile,
    updateProfile,
  };
};

export default useChat;
