import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBOvTBDw1LZTJFlpgPXejZQ7AJJfgDBpk",
  authDomain: "mymoney-382cb.firebaseapp.com",
  projectId: "mymoney-382cb",
  storageBucket: "mymoney-382cb.appspot.com",
  messagingSenderId: "153171312164",
  appId: "1:153171312164:web:267fad3409fd82fc98e2b1",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
