
import firebase from "firebase/compat/app";
//auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjefrB9r3moiLI022Rx1a1JkMfccjP--w",
  authDomain: "e-clone-part-2.firebaseapp.com",
  projectId: "e-clone-part-2",
  storageBucket: "e-clone-part-2.appspot.com",
  messagingSenderId: "572472375365",
  appId: "1:572472375365:web:645b2231c1acb1b07b4b2c",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();