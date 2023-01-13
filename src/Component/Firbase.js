// Import the functions you need from the SDKs you need
import { initializeApp,get } from "firebase/app";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCkBqLkMIuyyErDsNUqRr82C6zR44JIzDc",
  authDomain: "spectack-frames.firebaseapp.com",
  projectId: "spectack-frames",
  storageBucket: "spectack-frames.appspot.com",
  messagingSenderId: "300533741025",
  appId: "1:300533741025:web:0c3a33c0db5fcc867b0ea0",
  measurementId: "G-X21JXKYZ20"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;