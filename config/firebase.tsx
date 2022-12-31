import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATfKvTUKQDcwPTQq0-2Du6UlZX3uRqNCw",
  authDomain: "cuisinequest-a6935.firebaseapp.com",
  projectId: "cuisinequest-a6935",
  storageBucket: "cuisinequest-a6935.appspot.com",
  messagingSenderId: "1085736705685",
  appId: "1:1085736705685:web:4bfe3c804f60624d0d859c"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)