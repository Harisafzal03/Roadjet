// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLY3rwt9LOHyTETqX-rP24baQnvEUBtZ4",
  authDomain: "roadjet-cf13b.firebaseapp.com",
  projectId: "roadjet-cf13b",
  storageBucket: "roadjet-cf13b.appspot.com",
  messagingSenderId: "509973904226",
  appId: "1:509973904226:web:7b863d1224a902e20e8a3b",
  measurementId: "G-MD421SE6R4",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
