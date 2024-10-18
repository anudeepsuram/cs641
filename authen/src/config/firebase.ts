// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import Constants from "expo-constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8PJmO5V-gvdDwePpXk0Z8TKPr6a2WOSc",
  authDomain: "test-auth-dd84e.firebaseapp.com",
  projectId: "test-auth-dd84e",
  storageBucket: "test-auth-dd84e.appspot.com",
  messagingSenderId: "576416290307",
  appId: "1:576416290307:web:2b6e3500974e558af52036"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;