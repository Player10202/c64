// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpC_x5fme9AG5s9rhGcqEsispexKXrWhg",
  authDomain: "c64-offline-app.firebaseapp.com",
  databaseURL: "https://c64-offline-app-default-rtdb.firebaseio.com",
  projectId: "c64-offline-app",
  storageBucket: "c64-offline-app.appspot.com",
  messagingSenderId: "665198754154",
  appId: "1:665198754154:web:d511a163055339bcb14d13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);