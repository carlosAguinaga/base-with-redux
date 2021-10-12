import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIGlkFkVmec7f4lzeDBtL30EdKEPQ3XFw",
  authDomain: "redux-example-2c5a6.firebaseapp.com",
  projectId: "redux-example-2c5a6",
  storageBucket: "redux-example-2c5a6.appspot.com",
  messagingSenderId: "834459207703",
  appId: "1:834459207703:web:bfb2d54ea6dfdfd0163452",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export {db, googleProvider, firebase};
