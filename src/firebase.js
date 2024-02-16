// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_QRvNlujT8tGSpzs7D3LTs_fYdHWVhzw",
  authDomain: "react-notes-de640.firebaseapp.com",
  projectId: "react-notes-de640",
  storageBucket: "react-notes-de640.appspot.com",
  messagingSenderId: "277347222451",
  appId: "1:277347222451:web:35be03aab6ab996f8fc1c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");