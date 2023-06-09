// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj1R8N6ZdqxkB2xeBazv90ENrOU8n8kLM",
  authDomain: "paint-the-roses.firebaseapp.com",
  projectId: "paint-the-roses",
  storageBucket: "paint-the-roses.appspot.com",
  messagingSenderId: "263369477461",
  appId: "1:263369477461:web:fb2a98c304f1c193d2f3dc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);