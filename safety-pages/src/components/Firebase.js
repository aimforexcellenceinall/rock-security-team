// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// The Safety web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgjTV9HjKnCOezo9nDcpHxlAe_ekhypvM", // API key from Firebase, unique identifier for the Firebase project
  authDomain: "safety-app-d0b68.firebaseapp.com", // Authentication domain for Firebase Auth service
  databaseURL: "https://safety-app-d0b68.firebaseio.com", // URL to the Firebase Realtime Database
  projectId: "safety-app-d0b68", // Firebase project ID
  storageBucket: "safety-app-d0b68.appspot.com", // URL to the Firebase storage bucket
  messagingSenderId: "57700004496", // Sender ID for Firebase Messaging, used to send notifications
  appId: "1:57700004496:web:ba1bc07daceaa3b8749e15", // App ID, unique identifier for the app within the Firebase project
  measurementId: "G-SP3HK099HJ" // Measurement ID for Google Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =  getAuth(app);
const database = getDatabase(app);

export { auth, database, analytics };