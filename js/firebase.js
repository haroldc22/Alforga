// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPDnUB_-0DoPGAZzHvHariIGuzO7dY448",
  authDomain: "alforga-rep.firebaseapp.com",
  projectId: "alforga-rep",
  storageBucket: "alforga-rep.appspot.com",
  messagingSenderId: "283854610757",
  appId: "1:283854610757:web:d248aee194ed7295135e2c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
export const saveTask = (user, password, option) =>
  addDoc(collection(db, "alf"), { user, password, option });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "alf"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "alf", id));

export const getTask = (id) => getDoc(doc(db, "alf", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "alf", id), newFields);

export const getTasks = () => getDocs(collection(db, "alf"));
