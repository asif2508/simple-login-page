// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJCNceq3XA_9Vx8wRIcrp6YnATXkuY3rw",
  authDomain: "simple-login-page-d0aef.firebaseapp.com",
  projectId: "simple-login-page-d0aef",
  storageBucket: "simple-login-page-d0aef.appspot.com",
  messagingSenderId: "813557417133",
  appId: "1:813557417133:web:60df6294da8f0dcbfbb224"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;