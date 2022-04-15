// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBM0FFAA6ImOmKEFduRwphBOuIWULaLqc8",
    authDomain: "modern-car-service.firebaseapp.com",
    projectId: "modern-car-service",
    storageBucket: "modern-car-service.appspot.com",
    messagingSenderId: "732660011676",
    appId: "1:732660011676:web:64483ce3bd463d9a369359"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;