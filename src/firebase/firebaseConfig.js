// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsflvbdX7Se9A3u5l1dWgk9keH9Xl4REI",
    authDomain: "shop-mui.firebaseapp.com",
    projectId: "shop-mui",
    storageBucket: "shop-mui.appspot.com",
    messagingSenderId: "801020756115",
    appId: "1:801020756115:web:a7ec8ab3b85bba23a58d66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);