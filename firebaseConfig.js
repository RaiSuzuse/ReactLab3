import { getFirestore } from "firebase/firestore";
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAntPuQyIKgP8Tx8Egey6ZbeuObEJUwjF0",
  authDomain: "financialapp4-2a16f.firebaseapp.com",
  projectId: "financialapp4-2a16f",
  storageBucket: "financialapp4-2a16f.appspot.com",
  messagingSenderId: "940134444248",
  appId: "1:940134444248:web:6ab4ac7a16a35c8ec3fbad",
};

const firebaseApp = () => initializeApp(firebaseConfig);

if (getApps().length < 1) {
  firebaseApp();
}

const db = getFirestore(firebaseApp());

export { db };
