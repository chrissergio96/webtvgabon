// Remplace par les infos de ton projet Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCe975SjaU2dJOHV0crjU6kH0T1d85ZqCU",
  authDomain: "articleswebtv.firebaseapp.com",
  projectId: "articleswebtv",
  storageBucket: "articleswebtv.firebasestorage.app",
  messagingSenderId: "598936789704",
  appId: "1:598936789704:web:a48aa46aa34eaa78657bfd",
  measurementId: "G-NRQ8K9ZSQP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
