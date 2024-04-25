// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX6iWTqaIGBiR6Gwn7oDE3JSbzIJ8QD4o",
  authDomain: "social-calendar-8e0dd.firebaseapp.com",
  projectId: "social-calendar-8e0dd",
  storageBucket: "social-calendar-8e0dd.appspot.com",
  messagingSenderId: "387255582161",
  appId: "1:387255582161:web:66dba2a604c226785234f0",
  measurementId: "G-0WXY0TG9PP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getDatabase(app);

export { app, auth, db };