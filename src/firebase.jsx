import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCDUHjPiR_NLlWu22q_qdJ0r-COTT-64I",
  authDomain: "itt569.firebaseapp.com",
  databaseURL: "https://itt569-default-rtdb.firebaseio.com",
  projectId: "itt569",
  storageBucket: "itt569.appspot.com",
  messagingSenderId: "74323094011",
  appId: "1:74323094011:web:048073112dfb457505435e",
  measurementId: "G-JWKW1FWTVE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
