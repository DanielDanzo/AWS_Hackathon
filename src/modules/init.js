import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import {  getAuth, GoogleAuthProvider  } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js"
import {
  getStorage,
} from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js';



const firebaseConfig = {
    apiKey: "AIzaSyB2dFj8pWPBSUYkK3fEKA14iceB0YJ0erk",
    authDomain: "awshackathon-90c18.firebaseapp.com",
    projectId: "awshackathon-90c18",
    storageBucket: "awshackathon-90c18.appspot.com",
    messagingSenderId: "425649778999",
    appId: "1:425649778999:web:afdef9160c17ea5a036ab2",
    measurementId: "G-2EP6K2CWRF"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

//create google instance
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const storage = getStorage();

// Initialize Realtime Database and get a reference to the service

export { db, auth, provider, firebaseConfig , storage , getAuth};