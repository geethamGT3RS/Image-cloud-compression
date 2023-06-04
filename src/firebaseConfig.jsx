// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBso3Ahd3K_tnijrvwL-pSoaN3hxSVUBvQ",
  authDomain: "cloud-storage-cb4f9.firebaseapp.com",
  projectId: "cloud-storage-cb4f9",
  storageBucket: "cloud-storage-cb4f9.appspot.com",
  messagingSenderId: "342397612776",
  appId: "1:342397612776:web:c6a3304c8c1caff3a64f5d",
  measurementId: "G-J31CEWS4NN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);