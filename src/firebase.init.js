// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClLUX2c3376kOzn0D-z4q9ZSZplLi9Ndk",
  authDomain: "email-password-authentic-840cb.firebaseapp.com",
  projectId: "email-password-authentic-840cb",
  storageBucket: "email-password-authentic-840cb.firebasestorage.app",
  messagingSenderId: "387682630488",
  appId: "1:387682630488:web:699fdcd0fd49e1a5bbc32d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
