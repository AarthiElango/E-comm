import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyB7Dz5Cn52TSHAbXBWMfJrZwmssVxtvwyc",
    authDomain: "e-comm-fa971.firebaseapp.com",
    databaseURL: "https://e-comm-fa971-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "e-comm-fa971",
    storageBucket: "e-comm-fa971.appspot.com",
    messagingSenderId: "54224136781",
    appId: "1:54224136781:web:00ecfd94e5fe9292af8a04",
    measurementId: "G-SWBLE48D9F"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };