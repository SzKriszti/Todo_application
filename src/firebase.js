import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLueBoxFz2qHyr9doHSXh0K61j010V7So",
  authDomain: "todoapp-ed7e4.firebaseapp.com",
  projectId: "todoapp-ed7e4",
  storageBucket: "todoapp-ed7e4.appspot.com",
  messagingSenderId: "880675744509",
  appId: "1:880675744509:web:da4da4ac4836b47034ac94"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)