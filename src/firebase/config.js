// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOjBcF2N04bz5EddQHWmr_7HtuqZQKrOw",
  authDomain: "curso-react-hector.firebaseapp.com",
  projectId: "curso-react-hector",
  storageBucket: "curso-react-hector.appspot.com",
  messagingSenderId: "300106475150",
  appId: "1:300106475150:web:e8a11e1bc2b728c10bcbdf"
};

// Initialize Firebase
export const FirebaseApp    = initializeApp(firebaseConfig);
export const FirebaseAuth   = getAuth (FirebaseApp);
export const FirebaseDB     = getFirestore (FirebaseApp);