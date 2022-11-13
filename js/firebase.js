import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
import {
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB-7ktG5Sb_7q4Dw2pRAIudAAyjfE2g0WI",
  authDomain: "alforga-1d9a4.firebaseapp.com",
  projectId: "alforga-1d9a4",
  storageBucket: "alforga-1d9a4.appspot.com",
  messagingSenderId: "888742615552",
  appId: "1:888742615552:web:36251e1601d3319aac16e5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

export const saveTask = (nombre, apellido, gmail, grado, ti) =>
  addDoc(collection(db, "users"), { nombre, apellido, gmail, grado, ti})

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "users"), callback);