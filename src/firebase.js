// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvm1bxlhwJyZrydafkMwRGkZmamTAtLRw",
  authDomain: "lms-auth-73011.firebaseapp.com",
  projectId: "lms-auth-73011",
  storageBucket: "lms-auth-73011.appspot.com",
  messagingSenderId: "860258828764",
  appId: "1:860258828764:web:19fb92d9bddfe9584e0f19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;