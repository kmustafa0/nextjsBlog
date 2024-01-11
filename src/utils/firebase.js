// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-8ec81.firebaseapp.com",
  projectId: "blog-8ec81",
  storageBucket: "blog-8ec81.appspot.com",
  messagingSenderId: "1015698383954",
  appId: "1:1015698383954:web:e270f438fce2a17ac46b8b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
