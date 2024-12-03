

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6mTtXT2NlJCqo-fcwNLoPHCzCx5VxKsg",
  authDomain: "coffee-store-6eb9b.firebaseapp.com",
  projectId: "coffee-store-6eb9b",
  storageBucket: "coffee-store-6eb9b.firebasestorage.app",
  messagingSenderId: "373364820632",
  appId: "1:373364820632:web:ee62804bdcb65558aa9eed"
};

// Initialize Firebase Authentication and get a reference to the service
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;