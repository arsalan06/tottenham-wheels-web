// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeApp as initializeAppSecondary } from "firebase/app";
import { getAuth, getAuth as getAuthSecondary } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY5VHZbSrjgrkqJcBtmXJVQ56lA3XiAxw",
  authDomain: "tottenham-wheels-f0163.firebaseapp.com",
  projectId: "tottenham-wheels-f0163",
  storageBucket: "tottenham-wheels-f0163.firebasestorage.app",
  messagingSenderId: "170193274387",
  appId: "1:170193274387:web:eb06c350990ba70b8a21e6",
};

// Initialize Firebase
const secondaryApp = initializeAppSecondary(firebaseConfig, "Secondary");
const secondaryAuth = getAuthSecondary(secondaryApp);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, secondaryAuth, auth };
