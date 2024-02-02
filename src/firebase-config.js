// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyB4iDd98AB15ptbnMmaCW0JRgMC7F8oQUQ",
    authDomain: "reactdemoapp-13d50.firebaseapp.com",
    projectId: "reactdemoapp-13d50",
    storageBucket: "reactdemoapp-13d50.appspot.com",
    messagingSenderId: "87173619301",
    appId: "1:87173619301:web:c9975c7f13fbbe2d3bb08c",
    measurementId: "G-XP5EN01Y4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app)
const storage = getStorage(app)

export { app, fireStore, storage }