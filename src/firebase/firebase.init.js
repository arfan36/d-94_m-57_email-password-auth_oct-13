// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCC9dk1iUHS94qJqMrFMNXwQjEwUH3aGSQ",
    authDomain: "email-password-auth-f024a.firebaseapp.com",
    projectId: "email-password-auth-f024a",
    storageBucket: "email-password-auth-f024a.appspot.com",
    messagingSenderId: "585531572343",
    appId: "1:585531572343:web:f4f823ddef17b0d2cb4672"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;