import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnIHVNIe8AU04S9rLlhsRz1-bCkBp5KiA",
  authDomain: "proyecto1-16040.firebaseapp.com",
  databaseURL: "https://proyecto1-16040-default-rtdb.firebaseio.com/",
  projectId: "proyecto1-16040",
  storageBucket: "proyecto1-16040.firebasestorage.app",
  messagingSenderId: "668119900711",
  appId: "1:668119900711:web:59d60d0eb11183bdc3e402"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
