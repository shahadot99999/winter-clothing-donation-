// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJGM2O3o8Q1pXbffYM95uSesPUWS_ovkw",
  authDomain: "winter-clothing-donation-18ff1.firebaseapp.com",
  projectId: "winter-clothing-donation-18ff1",
  storageBucket: "winter-clothing-donation-18ff1.firebasestorage.app",
  messagingSenderId: "864389744320",
  appId: "1:864389744320:web:8a2bd0d1a99173c12b8f25"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export default app;