// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAQ9zEepgnhQlSEPtiO5jiYCk_xJo7JiY",
  authDomain: "ganeshaportfolio-fba8f.firebaseapp.com",
  projectId: "ganeshaportfolio-fba8f",
  storageBucket: "ganeshaportfolio-fba8f.firebasestorage.app",
  messagingSenderId: "253337082754",
  appId: "1:253337082754:web:78e48f2823a172961b0d9b",
  measurementId: "G-EMW717MEQ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
