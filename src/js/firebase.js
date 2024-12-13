// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3XZIhg0L1QF8QUMvtkK73GFOkWyaK-NQ",
  authDomain: "f1-page-bbb01.firebaseapp.com",
  projectId: "f1-page-bbb01",
  storageBucket: "f1-page-bbb01.firebasestorage.app",
  messagingSenderId: "324319365196",
  appId: "1:324319365196:web:b629e4bd0a0bfee2820ce9",
  measurementId: "G-N410MM1W14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);