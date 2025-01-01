// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzkNvbfZY-O4MaBOuosGjOCeyDSh0nYbE",
  authDomain: "interior-designer-25f20.firebaseapp.com",
  projectId: "interior-designer-25f20",
  storageBucket: "interior-designer-25f20.firebasestorage.app",
  messagingSenderId: "721049047839",
  appId: "1:721049047839:web:4a73f996db9b560e0e562a",
  measurementId: "G-BF7GP43L7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);