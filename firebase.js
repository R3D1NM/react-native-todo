// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzOxDwg2wpS0dUIbyx2PGMlRgcFJpT89A",
    authDomain: "react-native-todo-b4b6a.firebaseapp.com",
    projectId: "react-native-todo-b4b6a",
    storageBucket: "react-native-todo-b4b6a.appspot.com",
    messagingSenderId: "497463613138",
    appId: "1:497463613138:web:e612abf21f630325937f0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;