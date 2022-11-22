// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7EgcFk6-nZbhW5j5yKitaEgrlC7BDyZc",
  authDomain: "journalapp-2107a.firebaseapp.com",
  projectId: "journalapp-2107a",
  storageBucket: "journalapp-2107a.appspot.com",
  messagingSenderId: "681248797420",
  appId: "1:681248797420:web:c8cbbc8be2fa24beab2bc9"
};

// Initialize Firebase
export  const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );

export const FirebaseDB = getFirestore( FirebaseApp );