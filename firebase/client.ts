// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNZEN5GD1mR8Qu49rK-ihtdQeF_u5vccc",
  authDomain: "prepwise-4ece6.firebaseapp.com",
  projectId: "prepwise-4ece6",
  storageBucket: "prepwise-4ece6.firebasestorage.app",
  messagingSenderId: "1017142743462",
  appId: "1:1017142743462:web:4c6c124dc435ac5ff7ff67",
  measurementId: "G-4ZJFY7MYZD"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);

export const db = getFirestore(app);