import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCe975SjaU2dJOHV0crjU6kH0T1d85ZqCU",
  authDomain: "articleswebtv.firebaseapp.com",
  projectId: "articleswebtv",
  storageBucket: "articleswebtv.firebasestorage.app",
  messagingSenderId: "598936789704",
  appId: "1:598936789704:web:a48aa46aa34eaa78657bfd",
  measurementId: "G-NRQ8K9ZSQP."
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const storage = getStorage(app);