import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'; // Import Firebase database

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL", // Add your Firebase database URL here
  // ... other config options
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

// Initialize Firebase Authentication and Database
const auth = firebase.auth();
const database = firebase.database();

// Export authentication and database functionalities
export { auth, database, firebase };