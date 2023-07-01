import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKt9YwendIbMnV5atYFCkvQsZBh9gz-60",
  authDomain: "samyakk-portfolio.firebaseapp.com",
  projectId: "samyakk-portfolio",
  storageBucket: "samyakk-portfolio.appspot.com",
  messagingSenderId: "851092639558",
  appId: "1:851092639558:web:cbb2b18768176438c49f47"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
